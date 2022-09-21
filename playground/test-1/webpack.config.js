const path = require('path');

module.exports = {
  entry: './dist/example-1.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  }
};