const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validateRegisterInput = data => {
  console.log("validateRegisterInput");
  let errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.rePassword = !isEmpty(data.rePassword) ? data.rePassword : "";

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.firstName = "Username must be between 2 and 30 characters";
  }
  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "First name must be between 2 and 30 characters";
  }
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = "Last name must be between 2 and 30 characters";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.rePassword)) {
    errors.rePassword = "Passwords must match";
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (Validator.isEmpty(data.dob)) {
    errors.dob = "Date of Birth is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (Validator.isEmpty(data.rePassword)) {
    errors.rePassword = "Password is required";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  Object.keys(errors).length > 0 ? console.log(errors) : null;

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
