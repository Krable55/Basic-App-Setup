const db = require("../databases/postgres/config");
const { Op } = require("sequelize");
const { Users } = db;
const user = require("../databases/mongoDb/models/Users");

const createUser = data => {
  const { email, firstName, lastName, dob } = data;
  const mongoQuery = { email: data.email };

  const options = {
    where: {
      email: { [Op.iLike]: email }
    },
    defaults: {
      email,
      firstName,
      lastName,
      dob
    }
  };

  //Add Mongo user
  user
    .findOneAndUpdate(mongoQuery, data, {
      upsert: true
      // setDefaultsOnInsert: true
    })
    .then(result => {
      console.log("Created Mongo user");
    })
    .catch(err => console.log(err));

  //Add Postgres user
  return Users.findCreateFind(options).spread((user, create) => {
    if (create) {
      // do stuff if user is new maybe
    }

    return user.get({ plain: true });
    // figureout not created user flow
  });
};

module.exports = {
  createUser
};
