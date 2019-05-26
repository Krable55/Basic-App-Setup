const Validator = require("validator");
const isEmpty = require("./isEmpty");

let validateProfileInput = data => {
  data.age = !isEmpty(data.age) ? data.age : 0;
  data.weight = !isEmpty(data.weight) ? data.weight : 0;
  data.bmi = !isEmpty(data.bmi) ? data.bmi : 0;
  data.height = !isEmpty(data.height) ? data.height : 0;
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.goal = !isEmpty(data.goal) ? data.goal : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  return data;
};
let validateProfileComplete = data => {
  let errors = {};
  if (data.height === 0) {
    errors.height = "Please enter you height";
  }
  if (data.weight === 0) {
    errors.weight = "Please enter you weight";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "please enter your gender";
  }
  return {
    errors,
    isComplete: isEmpty(errors)
  };
};
module.exports = {
  validateProfileComplete,
  validateProfileInput
};
