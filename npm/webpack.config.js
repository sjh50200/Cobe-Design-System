const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const FILENAME = pkg.name + (isProduction ? '.min' : '');

const config = {
  entry: './src/ts/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: FILENAME + '.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
};

module.exports = config;