const express = require("express");
const router = express.Router();

router.use("/users", require("./usersController"));
router.use("/workouts", require("./workoutsController"));
router.use("/meals", require("./mealsController"));
router.get("/", function(req, res) {
  res.send("Home Page");
});
module.exports = router;
