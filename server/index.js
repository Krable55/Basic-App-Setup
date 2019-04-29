const express = require("express");
const router = express.Router();
const app = express();

const bodyParser = require("body-parser");

const config = require("../webpack.config.dev.js");
const webpack = require("webpack");
const hotMiddleware = require("webpack-hot-middleware");
const middleware = require("webpack-dev-middleware");
const compiler = webpack(config);

const port = 3000;
const Mongo = require('./databases/mongoDb/config.js')

app.use(bodyParser.json({ type: "application/json" }));

app.use(express.static("client/public"));
app.use(
  middleware(compiler, {
    serverSideRender: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
  })
);
app.use(
  hotMiddleware(compiler, {
    log: console.log
  })
);
// renders the index.html file from the client/public folder same as lines 8-10

app.listen(port, error => {
  if (error) {
    console.log("Error Connecting to Server!");
  } else {
    console.log(`Listening to port ${port}!`);
  }

});

app.get('/', (req, res) => {



})
