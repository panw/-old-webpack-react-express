var path = require('path')

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "./build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', query: {presets: ['es2015', 'react']}, exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
