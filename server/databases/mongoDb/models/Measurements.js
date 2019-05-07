const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const bodyMeasurementsSchema = new mongoose.Schema({
  // _creator: { type: ObjectId, ref: "User" },
  shoulders: Number,
  chest: Number,
  upperStomach: Number,
  bellyButton: Number,
  loveHandles: Number,
  waistLine: Number,
  buttCheeks: Number,
  neck: Number,
  rightBicep: Number,
  rightBicepFlexed: Number,
  rightForearm: Number,
  rightForearmFlexed: Number,
  rightCalf: Number,
  rightCalfFlexed: Number,
  rightThigh: Number,
  rightUpperThigh: Number,
  leftBicep: Number,
  leftBicepFlexed: Number,
  leftForearm: Number,
  leftForearmFlexed: Number,
  leftCalf: Number,
  leftCalfFlexed: Number,
  leftThigh: Number,
  leftUpperThigh: Number
});
module.exports = mongoose.model("Measurements", bodyMeasurementsSchema);
