var path = require("path")
var webpack = require("webpack")
module.exports = {
  entry:[ "./src/index.js",
      'webpack-dev-server/client?http://0.0.0.0:9000', //hot loader 
      'webpack/hot/dev-server'  //hot loader
    ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/",
  },
  plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot','babel-loader'
        ]
      },
    ]
  },
}
