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
  validateProfileInput,
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
          let createdUser = User.get({ plain: true });

          return {
            status: 200,
            msg: "User successfully registered"
          };
        }
      })
      .catch(err => console.log(err));
  }
};

const loginUser = data => {
  //Validate Login data
  const { errors, isValid } = validateLoginInput(data);
  const { email, password } = data;
  const query = { where: { email: email } };
  //find user by email
  return Users.findOne(query)
    .then(user => {
      //Return errors if input is invalid
      if (!isValid) {
        return { status: 400, msg: errors };
      }
      if (!user) {
        errors.email = "No account registered to that email";
        return { status: 400, msg: errors };
      }
      //Validtes password
      return bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const { firstName, lastName, id, email } = user;
          //Returns user
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

const logOutUser = () => {
  return new Promise((resolve, reject) => {
    resolve({ status: 200, msg: "Logged out" });
  });
};
const profileUser = data => {
  const { email, id } = data;
  const completed = Math.floor((2 / 10) * 100);
  //validate input
  // const {
  //   age,
  //   weight,
  //   height,
  //   gender,
  //   goal,
  //   targetWeight,
  //   bio,
  //   bmi,
  //   handle
  // } = validateProfileInput(data);

  const options = {
    where: {
      id: id
    },
    defaults: {
      id,
      email,
      completed
    }
  };
  //find user profile create if none exists
  return Profiles.findCreateFind(options)
    .spread((Profile, created) => {
      let profile = Profile.dataValues;
      if (created) {
        // console.log("Profile created for ", email);
        //Return a message asking them to fill out/complete their profile?
        profile.alerts = { profile: "Would you like to set up your profile?" };
        return { status: 200, msg: profile };
      } else if (Profile.completed !== 100) {
        profile.alerts = {
          profile: "Finish setting up your profile!"
        };
        //returns profile w/o messages
        return { status: 200, msg: profile };
      } else return { status: 200, msg: profile };
    })
    .catch(err => console.log(err));
};

//update user profile
const updateProfileUser = data => {
  /**** Validate inputs here ******/
  const { id } = data;

  let updatedInfo = {};
  for (var key in data) {
    data[key] !== null && data[key] !== undefined
      ? (updatedInfo[key] = data[key])
      : null;
  }
  const options = {
    where: { id: id },
    returning: true,
    plain: true
  };

  //find and update user profile
  return Profiles.update(updatedInfo, options)
    .then(updatedProfile => {
      let profile = updatedProfile[1];
      return { status: 200, msg: profile };
      done();
    })
    .catch(err => console.log(err));
};

module.exports = {
  registerUser,
  loginUser,
  logOutUser,
  updateProfileUser,
  profileUser
};
