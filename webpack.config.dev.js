const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: [
    "webpack/hot/dev-server",
    "webpack-hot-middleware/client",
    "./client/src/index.jsx"
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: "/client/public",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./client/public"
  }
};
