module.exports = {
  context: __dirname,
  entry: __dirname + "/src",
  output: {
    path: __dirname + "/dist",
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "dist/",
    historyApiFallback: {
      index: "/"
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "eslint"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css/,
        loaders: ["style", "css"]
      }
    ]
  }
}
