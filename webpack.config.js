const path = require('path');

module.exorts = {
  mode: "production",
  context: __dirname + "/client",
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "bundle.js",
  },
  modules: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  }
}