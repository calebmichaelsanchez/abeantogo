var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "js"),
  output: {
    path: path.resolve(__dirname, "./template/scripts"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
