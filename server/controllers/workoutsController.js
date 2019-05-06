const express = require('express');
const router = express.Router();
const { createWorkout, deleteWorkout, getUserWorkouts } = require('../services/workoutServices');

/* ------------------------- */
/*       AUTH ROUTES         */
/* ------------------------- */


router.post('/', (req, res) => {
    const { body } = req;
    // console.log(body, 'Whats  post workout req body!?');
    createWorkout(body)
    .then( result => {
        // console.log(result, 'RESULT of Post Workout / Create!!!');
        return res.json(result);
    })
    .catch( error => {
        res.send(error);
    })
});

router.get('/', (req, res) => {
    res.send('Got em!');
});

router.get('/:userId', (req, res) => {
    const { body } = req;
    // console.log(body, 'Confirming information on Req');
    getUserWorkouts(body)
    .then( result => {
        // console.log(result, 'Confirming Result getUserWorkouts!');
        return res.json(result);
    })
    .catch( error => {
        res.send(error, 'Error with Get User Workouts!');
    })
});

router.delete('/:workoutId', (req, res) => {
    const { params } = req;
    // console.log(params, 'Checking req.params');
    deleteWorkout(params)
    .then( result => {
        // console.log(result, 'Delete result?!?');
        return res.json(result);
    })
    .catch( error => {
        res.send(error)
    })
})

// get /:userId (add query filters as a params)
// delete router.delete(/:workoutId)

module.exports = router;