const db = require('../databases/postgres/config');
// require db
const { Op } = require('sequelize');
// needed for certain sequelize query paramaters
const { Workouts } = db;
// import Workouts table from db

const createWorkout = (data) => {
    const {
        name
    } = data;
    const options = {
        name
    };
    console.log(data, 'what is data in create workout?!?1');
    return new Promise ((resolve, reject) => {
        Workouts.create(options)
        .then( (result) => {
            resolve(result.get({ plain: true }));
        })
        .catch(reject);
    })
};


module.exports = {
    createWorkout,
};