const express = require("express");
const router = express.Router();
const { createMeal } = require("../services/mealServices");
// Create New User
router.post("/", (req, res) => {
  const { body } = req;
  createMeal(body)
    .then(result => {
      return res.json(result);
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
