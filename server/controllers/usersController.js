const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../services/userServices");

/* ------------------------- */
/*       AUTH ROUTES         */
/* ------------------------- */

// Create New User
router.post("/register", (req, res) => {
  const { body } = req;
  registerUser(body)
    .then(result => {
      if (result) {
        console.log("Registered User");
        res.status(200).json({ result: `Registered User: ${result}` });
      } else {
        return res.status(400).json({ email: "Email already in use" });
      }
    })
    .catch(error => {
      res.send(error);
    });
});

router.post("/login", (req, res) => {
  const { body } = req;
  loginUser(body)
    .then(result => {
      console.log("result", result);
      res.status(result.valid ? 200 : 400).json(result.msg);
    })
    .catch(error => {
      res.send(error);
    });
});

// post /login to set up log in
// put / update user if needed (change name etc)

module.exports = router;
