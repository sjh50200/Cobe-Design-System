const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const FILENAME = pkg.name + (isProduction ? '.min' : '');

const config = {
  entry: './src/ts/index.ts',
  output: {
    // path: path.join(__dirname, "dist"),
    // filename: FILENAME + ".js",
    library: ['tui', 'Calender'],
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', 'tsx'],
    alias: {
      '@src': path.resolve(__dirname, './src/ts/'),
    },
  },
};

module.exports = config;
