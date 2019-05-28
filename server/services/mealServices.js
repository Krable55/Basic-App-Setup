const db = require("../databases/postgres/config");
// require db
const { Op } = require("sequelize");
// needed for certain sequelize query paramaters
const { Meals } = db;
// import Workouts table from db

const createMeal = data => {
  const { name } = data;
  const options = { name };
  return new Promise((resolve, reject) => {
    Meals.create(options)
      .then(result => {
        resolve(result.get({ plain: true }));
      })
      .catch(reject);
  });
};

module.exports = {
  createMeal
};
