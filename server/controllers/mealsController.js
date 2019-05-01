const express = require("express");
const router = express.Router();
const { createMeal } = require("../services/mealServices");

/* ------------------------- */
/*       AUTH ROUTES         */
/* ------------------------- */

// Create New User
router.post("/", (req, res) => {
  const { body } = req;
  console.log(body, "Whats create meal req body!?");
  createMeal(body)
    .then(result => {
      console.log(result, "What is create meal result?");
      return res.json(result);
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
