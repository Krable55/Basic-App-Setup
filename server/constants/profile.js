const profile = {
  sex: ["Male", "Female", "Other"],
  height: {
    feet: [...Array(9).keys()],
    inches: [...Array(11).keys()],
    quarters: [0.25, 0.5, 0.75]
  },
  weight: ["lbs", "kg"],
  goal: ["Lose weight", "Build muscle", "Feel Healthier"]
};

module.exports = profile;
