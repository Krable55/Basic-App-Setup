const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  registerUser,
  loginUser,
  profileUser,
  updateProfileUser
} = require("../services/userServices");

// Create New User
router.post("/register", (req, res) => {
  const { body } = req;
  registerUser(body)
    .then(result => res.status(result.status).json(result.msg))
    .catch(err => console.log(err));
});
//Login User
router.post("/login", (req, res) => {
  const { body } = req;
  loginUser(body)
    .then(result => {
      res.status(result.status).json(result.msg);
    })
    .catch(error => {
      console.log("error in post login");
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

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { body } = req;
    profileUser(body)
      .then(result => {
        // console.log(result);
        res.status(result.status).json(result.msg);
      })
      .catch(err => err);
  }
);

router.post(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { body } = req;
    updateProfileUser(body)
      .then(result => {
        console.log(result);
        res.status(result.status).json(result.msg);
      })
      .catch(err => err);
  }
);

// post /login to set up log in
// put / update user if needed (change name etc)

module.exports = router;
