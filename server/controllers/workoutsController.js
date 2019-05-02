const express = require('express');
const router = express.Router();
const { createWorkout } = require('../services/workoutServices');

/* ------------------------- */
/*       AUTH ROUTES         */
/* ------------------------- */

// Create New User
router.post('/', (req, res) => {
    const { body } = req;
    console.log(body, 'Whats req body!?');
    createWorkout(body)
    .then( result => {
        console.log(result, 'RESULT of Post Workout / Create!!!');
        return res.json(result);
    })
    .catch( error => {
        res.send(error);
    })
});

router.get('/', (req, res) => {
    res.send('Got em!');
});

// get /:userID (add query filters as a params)
// delete router.delete(/:workoutID)

module.exports = router;