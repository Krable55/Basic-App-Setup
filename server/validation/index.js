module.exports = {
  validateRegisterInput: require("./register"),
  validateLoginInput: require("./login"),
  createProfileInput: require("./profile").createProfileInput,
  validateProfileComplete: require("./profile").validateProfileComplete,
  isEmpty: require("./isEmpty")
};
