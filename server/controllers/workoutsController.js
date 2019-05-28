const express = require("express");
const router = express.Router();
const {
  createWorkout,
  deleteWorkout,
  getUserWorkouts
} = require("../services/workoutServices");

router.post("/", (req, res) => {
  const { body } = req;
  createWorkout(body)
    .then(result => {
      return res.json(result);
    })
    .catch(error => {
      res.send(error);
    });
});

router.get("/", (req, res) => {
  res.send("Got em!");
});

router.get("/:userId", (req, res) => {
  const { body } = req;
  getUserWorkouts(body)
    .then(result => {
      return res.json(result);
    })
    .catch(error => {
      res.send(error, "Error with Get User Workouts!");
    });
});

router.delete("/:workoutId", (req, res) => {
  const { params } = req;
  // console.log(params, 'Checking req.params');
  deleteWorkout(params)
    .then(result => {
      // console.log(result, 'Delete result?!?');
      return res.json(result);
    })
    .catch(error => {
      res.send(error);
    });
});

// get /:userId (add query filters as a params)
// delete router.delete(/:workoutId)

module.exports = router;
