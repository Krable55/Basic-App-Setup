const mongoose = require("mongoose");
const Promise = require("bluebird");
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/btt", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("connected", function(error) {
  if (error) {
    console.error(error, "ERROR!!!!!");
  } else {
    console.log("Connected to MongoDB");
  }
});

// const test = {
//   username: "Kyle",
//   bodyMeasurements: [
//     {
//       dateCreated: new Date(),
//       shoulders: 13,
//       chest: 45,
//       upperStomach: 45
//     }
//   ]
// };

// // const workoutsSchema = new mongoose.Schema({});

// const MongoUser = mongoose.model("User", userSchema);

// // const addUser = function(user){
// //   console.log(user, 'This is the USER!!!');
// //   mongoDB.collection('users').insert(user);
// // }
// // addUser({ username: 'Christian' });
// const MongoBodyMeasurements = mongoose.model('BodyMeasurements', bodyMeasurementsSchema);

module.exports = db;
