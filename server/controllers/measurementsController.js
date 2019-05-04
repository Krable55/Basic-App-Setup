const express = require("express");
const router = express.Router();
const { createMeasurements } = require("../services/measurementServices");

router.post("/", (req, res) => {
  const { body } = req;
  createMeasurements(body)
    .then(result => {
      // console.log(result, "=> createMeasurements result?");
      return res.json(result);
    })
    .catch(error => {
      res.send(error);
    });
});

// post /login to set up log in
// put / update user if needed (change name etc)

module.exports = router;
