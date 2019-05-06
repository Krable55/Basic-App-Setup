const db = require("../databases/postgres/config");
// require db
const { Op } = require("sequelize");
// needed for certain sequelize query paramaters
const { Workouts } = db;
// import Workouts table from db

const createWorkout = data => {
  const { name } = data;
  const options = { name };
  // console.log(data, "what is data in create workout?!?");
  return new Promise((resolve, reject) => {
    Workouts.create(options)
      .then(result => {
        resolve(result.get({ plain: true }));
      })
      .catch(reject);
  });
};

const getUserWorkouts = data => {
  // should this be id or userId?
  const { userId } = data;
  const options = { userId };
  console.log(data, 'Checking User ID on getUserWorkouts!');
  return new Promise((resolve, reject) => {
    Workouts.findAll({
      where: {
        id: options
      }
    })
    .then(result => {
      resolve(result.get({ plain: true }));
    })
    .catch(reject);
  });
};

const deleteWorkout = data => {
  // const { workoutId } = data;
  const options = data.workoutId;
  // const options = { workoutId };
  // console.log(data, 'Checking WorkoutID?!?!?!');
  // console.log(options, 'Checking WorkoutID Options info!!!');
  return new Promise((resolve, reject) => {
    Workouts.destroy({
      where: {
        id: options
      }
    })
    .then(result => {
      resolve(`Successfully deleted ${result} item(s)!`);
    })
    .catch(reject);
  })
};


module.exports = {
  createWorkout,
  deleteWorkout,
  getUserWorkouts,
};
