const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './src/render.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}