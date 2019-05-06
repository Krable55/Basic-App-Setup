const db = require("../databases/postgres/config");
const { Op } = require("sequelize");
const { Users } = db;
const userMongo = require("../databases/mongoDb/models/Users");
const bcrypt = require("bcrypt");
const keys = require("../../configTokens");
const jwt = require("jsonwebtoken");

const registerUser = data => {
  const { email, firstName, lastName, dob, password } = data;
  const mongoQuery = userMongo.where({ email: email });

  const options = {
    where: {
      email: { [Op.iLike]: email }
    },
    defaults: {
      email,
      password,
      firstName,
      lastName,
      dob
    }
  };

  //Returns false if user email exists in db, creates new user in mongo and postgres if it doesn't exist
  return Users.findCreateFind(options).spread((User, created) => {
    if (!created) {
      return false;
    }
    //create mongo user
    userMongo
      .findOne(mongoQuery)

      .then(user => {
        if (user) return false;
        const newUser = new user({
          email: email
        });
        newUser.save();
        console.log("Created Mongo user");
      })
      .catch(err => console.log(err));
    // user.get({ plain: true });
    return email;
  });
};

const loginUser = data => {
  console.log("login called");
  const { email, password } = data;
  const query = { where: { email: email } };
  //find user by email
  return Users.findOne(query).then(user => {
    if (!user) {
      return { valid: false, msg: { email: "Invalid Email" } };
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
        return { valid: isMatch, msg: { token: "Bearer: " + token } };
      } else {
        return { valid: isMatch, msg: { password: "Incorrect Password" } };
      }
    });
  });
};

module.exports = {
  registerUser,
  loginUser
};
