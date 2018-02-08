var webpack = require('webpack');
require('core-js/fn/promise');
var path = require('path');
var loaders = require('./webpack.loaders.prod');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = ['dist'];
// the clean options to use

// loaders.push({
//   test: /\.scss$/,
//   loaders: ['style-loader', 'css-loader?importLoaders=1'],
//   exclude: ['node_modules']
// });

module.exports = {
  entry: [
    // 'core-js/fn/promise',
    // 'core-js/fn/array',
    './src/index.js' // your app's entry point
  ],
  // devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },

  // module: {
  //   loaders
  // },
  module: { loaders },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
      // ROOT_URL_SEARCH: JSON.stringify('/webapp/software-center/rest/v1/software/search/'),
      // ROOT_URL_SEARCH_Q: JSON.stringify('/webapp/software-center/rest/v1/software/home/'),
      // ROOT_URL_SUGGEST: JSON.stringify('/suggest/?max=10&site=qc_en&client=qc_search_all_results&access=p&format=rich'),
      // ROOT_URL_METRICS: JSON.stringify('')
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new UglifyJsPlugin({
      test: /\.jsx?$/i
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js']
      }
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: process.env.NODE_ENV === 'development'
    })
  ]
};
