const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  registerUser,
  loginUser,
  logOutUser,
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

//Logout user
router.get("/logout", (req, res) => {
  logOutUser()
    .then(result => {
      res.status(result.status).json(result.msg);
    })
    .catch(error => res.send(error));
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id, firstName, lastName, email } = req.user;
    res.json({ id: id, name: firstName + " " + lastName, email: email });
  }
);

//Get User Profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const body = { id: req.user.id, email: req.user.email };
    profileUser(body)
      .then(result => {
        // console.log(result);
        res.status(result.status).json(result.msg);
      })
      .catch(err => err);
  }
);

//Update Profile
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

module.exports = router;
