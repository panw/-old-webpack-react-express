var path = require('path')

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "http://localhost:8080/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', query: {presets: ['es2015', 'stage-0', 'react']}, exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
