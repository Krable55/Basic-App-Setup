const express = require("express");
const router = express.Router();
const { createMeasurements } = require("../services/measurementServices");

router.post("/", (req, res) => {
  const { body } = req;
  createMeasurements(body)
    .then(result => {
      return res.json(result);
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
