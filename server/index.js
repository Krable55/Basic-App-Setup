const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;
const Mongo = require("./databases/mongoDb/config.js");
const db = require("./databases/postgres/config");
const passport = require("passport");
let passportConfig = require("../config/passportConfig.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

app.use(express.static("client/public"));

//HotReloader Setup
(function() {
  //Create & configure a webpack compiler
  var webpack = require("webpack");
  var webpackConfig = require(process.env.WEBPACK_CONFIG
    ? process.env.WEBPACK_CONFIG
    : "../webpack.config.dev.js");
  var compiler = webpack(webpackConfig);

  //Attach the dev middleware to the compiler & the server
  app.use(
    require("webpack-dev-middleware")(compiler, {
      logLevel: "warn",
      publicPath: webpackConfig.output.publicPath
    })
  );

  //Attach the hot middleware to the compiler & the server
  app.use(
    require("webpack-hot-middleware")(compiler, {
      log: console.log,
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000
    })
  );
})();
// END HotReloader Setup

//Passport middleware
app.use(passport.initialize());

//Passport config
passportConfig(passport);

let dataPath = path.join(__dirname, "../client/public/index.html");

//Connects to all controllers
app.use(require("./controllers"));

//Directs all requests to index.html
app.get("*", (req, res) => {
  //make sure this is your production when deploying app
  res.sendFile(dataPath);
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(port, error => {
    if (error) {
      console.log("Error Connecting to Server!");
    } else {
      console.log(`Express connected & listening on port ${port}!`);
    }
  }),
    error => {
      console.log("Sequelize Connection Error!!", error);
    };
});
