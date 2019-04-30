const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const Mongo = require('./databases/mongoDb/config.js')
const userController = require('./controllers/usersControllers');
const workoutsController = require('./controllers/workoutsController');
const db = require('./databases/postgres/config');

app.use(bodyParser.json({ type: "application/json" }));

app.use(express.static("client/public"));
// renders the index.html file from the client/public folder same as lines 8-10


app.use('/users', userController);
app.use('/workouts', workoutsController);

db.sequelize
  .sync({force: false})
  .then(
    () => {
      app.listen(port, error => {
        if (error) {
          console.log("Error Connecting to Server!");
        } else {
          console.log(`Listening to port ${port}!`);
        }
    }),
    error => {
      console.log('Sequelize Connection Error!!', error);
    }
});