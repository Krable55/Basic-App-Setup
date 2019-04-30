// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/btt', {useNewUrlParser: true});

// const mongoDB = mongoose.connection;
// mongoDB.on('error', console.error.bind(console, 'connection error:'));
// mongoDB.once('connected', function (error) {
//     if (error) {
//         console.error(error, 'ERROR!!!!!');
//     } else {
//       console.log('we connected!!!!')
//     }
//     MongoUser.create(test, function (error) {
//     if (error) {
//         console.error(error, 'TEST ERROR!!!!!');
//     } else {
//       console.log('we tested!!!!')
//     }
//   })
// });


// const test = { username : "Kyle", bodyMeasurements: [
//     {
//     dateCreated: new Date(),
//     shoulders: 13,
//     chest: 45,
//     upperStomach: 45
//   }
// ]};
// // const userSchema = new mongoose.Schema({
// //     username: String,
// // });

// const bodyMeasurementsSchema = new mongoose.Schema({
//     measurements: {
//         type: {
//             shoulders: Number,
//             chest: Number,
//             upperStomach: Number,
//             bellyButton: Number,
//             loveHandles: Number,
//             waistLine: Number,
//             buttCheeks: Number,
//             neck: Number,
//             rightBicep: Number,
//             rightBicepFlexed: Number,
//             rightForearm: Number,
//             rightForearmFlexed: Number,
//             rightCalf: Number,
//             rightCalfFlexed: Number,
//             rightThigh: Number,
//             rightUpperThigh: Number,
//             leftBicep: Number,
//             leftBicepFlexed: Number,
//             leftForearm: Number,
//             leftForearmFlexed: Number,
//             leftCalf: Number,
//             leftCalfFlexed: Number,
//             leftThigh: Number,
//             leftUpperThigh: Number,
//         },
//     },
// });

// // const workoutsSchema = new mongoose.Schema({

// // });

// // const MongoUser = mongoose.model('User', userSchema);

// // const addUser = function(user){
// //   console.log(user, 'This is the USER!!!');
// //   mongoDB.collection('users').insert(user);
// // }
// // addUser({ username: 'Christian' });
// const MongoBodyMeasurements = mongoose.model('BodyMeasurements', bodyMeasurementsSchema);

// module.exports = {
//     mongoDB,
//     MongoUser,
//     addUser,
//     MongoBodyMeasurements,
// };