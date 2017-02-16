module.exports = {
  entry: "./app",
  output: {
    path: __dirname + "./build",
    filename: "bundle.js"
  },
  resolve: {
    extensions:[".", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./build",
    inline: true
  }
}
