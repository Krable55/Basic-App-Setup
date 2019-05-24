const db = require("../databases/postgres/config");
const { Op } = require("sequelize");
const { Users, Profiles } = db;
const userMongo = require("../databases/mongoDb/models/Users");
const bcrypt = require("bcrypt");
const keys = require("../../config/configTokens");
const jwt = require("jsonwebtoken");
const {
  validateRegisterInput,
  validateLoginInput,
  createProfileInput,
  validateProfileComplete
} = require("../validation");

const registerUser = data => {
  const { email, firstName, lastName, dob, password, username } = data;
  console.log(data);
  //Validate registration data
  const { errors, isValid } = validateRegisterInput(data);
  const mongoQuery = userMongo.where({ email: email });

  const options = {
    where: {
      email: { [Op.iLike]: email }
    },
    defaults: {
      email,
      password,
      firstName,
      username,
      lastName,
      dob
    }
  };
  //Checks form validation
  if (!isValid) {
    return new Promise((resolve, reject) => {
      resolve({ status: 400, msg: errors });
    });
  } else {
    //Returns false if user email exists in db, creates new user in mongo and postgres if it doesn't exist
    return Users.findCreateFind(options)
      .spread((User, created) => {
        //Return error if email is in use
        if (!created) {
          if (!created) errors.email = "Email already in use";
          return { status: 400, msg: errors };
        } else {
          //create mongo user
          userMongo
            .findOne(mongoQuery)
            .then(user => {
              const newUser = new userMongo({
                email: email
              });
              newUser.save();
              console.log("Created mongo user");
            })
            .catch(err => console.log(err));
          // user.get({ plain: true });
          return { status: 200, msg: { success: "User Registered" } };
        }
      })
      .catch(err => console.log(err));
  }
};

const loginUser = data => {
  const { errors, isValid } = validateLoginInput(data);
  const { email, password } = data;
  const query = { where: { email: email } };
  //find user by email
  return Users.findOne(query)
    .then(user => {
      //Validate Login data

      if (!isValid) {
        return { status: 400, msg: errors };
      }
      if (!user) {
        errors.email = "No account registered to that email";
        return { status: 400, msg: errors };
      }
      return bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const { firstName, lastName, id, email } = user;
          const payload = {
            id: id,
            name: `${firstName} ${lastName}`,
            email: email
          };
          token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });
          return { status: 200, msg: { token: "Bearer " + token } };
        } else {
          return { status: 400, msg: { password: "Incorrect Password" } };
        }
      });
    })
    .catch(error => console.log(error));
};
const profileUser = data => {
  const { email, id } = data;
  const {
    age,
    weight,
    height,
    gender,
    goal,
    bio,
    bmi,
    handle
  } = createProfileInput(data);

  const options = {
    where: {
      id: id
    },
    defaults: {
      id,
      email,
      age, //Should be entered automatically since they entered a DOB at registration
      height,
      weight,
      gender,
      goal,
      bio,
      bmi,
      handle
    }
  };
  //find user profile create if none exists
  return Profiles.findCreateFind(options)
    .spread((Profile, created) => {
      let profile = Profile.dataValues;
      const { errors, isComplete } = validateProfileComplete(
        Profile.dataValues
      );
      if (!Profile) {
        return {
          status: 400,
          msg: { profile: "There is no profile for this user" }
        };
      }
      if (created) {
        console.log("Profile created for ", email);
        //Return a message asking them to fill out/complete their profile?
        profile.complete = false;
        profile.alerts = { profile: "Would you like to set up your profile?" };
        return { status: 200, msg: Profile };
      }
      if (!isComplete) {
        profile.alerts = errors;
        profile.complete = false;
        //return messages asking them to complete their profile
        return { status: 200, msg: profile };
      } else {
        //returns profile w/o messages
        profile.complete = true;
        return { status: 200, msg: profile };
      }
    })
    .catch(err => console.log(err));
};

const updateProfileUser = data => {
  const { email, id } = data;
  // const {
  //   age,
  //   weight,
  //   height,
  //   gender,
  //   goal,
  //   bio,
  //   bmi,
  //   handle
  // } = createProfileInput(data);

  const options = {
    where: {
      id: id
    },
    defaults: {
      id,
      email,
      age, //Should be entered automatically since they entered a DOB at registration
      height,
      weight,
      gender,
      goal,
      bio,
      bmi,
      handle
    }
  };
  //find user profile create if none exists
  return Profiles.findCreateFind(options)
    .spread((Profile, created) => {
      let profile = Profile.dataValues;
      const { errors, isComplete } = validateProfileComplete(
        Profile.dataValues
      );
      if (!Profile) {
        return {
          status: 400,
          msg: { profile: "There is no profile for this user" }
        };
      }
      if (created) {
        console.log("Profile created for ", email);
        //Return a message asking them to fill out/complete their profile?
        profile.complete = false;
        profile.alerts = { profile: "Would you like to set up your profile?" };
        return { status: 200, msg: profile };
      }
      if (!isComplete) {
        profile.alerts = errors;
        profile.complete = false;
        //return messages asking them to complete their profile
        return { status: 200, msg: profile };
      } else {
        //returns profile w/o messages
        profile.complete = true;
        return { status: 200, msg: profile };
      }
    })
    .catch(err => console.log(err));
};

module.exports = {
  registerUser,
  loginUser,
  updateProfileUser,
  profileUser
};
