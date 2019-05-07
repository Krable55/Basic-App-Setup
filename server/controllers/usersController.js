const express = require("express");
const router = express.Router();
const passport = require("passport");
const { registerUser, loginUser } = require("../services/userServices");

// Create New User
router.post("/register", (req, res) => {
  const { body } = req;
  //Check validation

  registerUser(body)
    .then(result => res.status(result.status).json(result.msg))
    .catch(error => {
      res.send(error);
    });
});

router.post("/login", (req, res) => {
  const { body } = req;
  loginUser(body)
    .then(result => {
      res.status(result.valid ? 200 : 400).json(result.msg);
    })
    .catch(error => {
      res.send(error);
    });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id, firstName, lastName, email } = req.user;
    res.json({ id: id, name: firstName + " " + lastName, email: email });
  }
);

// post /login to set up log in
// put / update user if needed (change name etc)

module.exports = router;
