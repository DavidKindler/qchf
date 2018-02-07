var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm

// the path(s) that should be cleaned
let pathsToClean = ['dist'];
// the clean options to use
let cleanOptions = {
  root: __dirname,
  exclude: ['shared.js'],
  verbose: true,
  dry: false
};

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

// loaders.push({
//   test: /\.scss$/,
//   loaders: ['style-loader', 'css-loader?importLoaders=1'],
//   exclude: ['node_modules']
// });

module.exports = {
  entry: ['./src/index.js'],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: './dist',
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
      // ROOT_URL_SEARCH: JSON.stringify('/webapp/software-center/rest/v1/software/search/'),
      // ROOT_URL_SEARCH_Q: JSON.stringify('/webapp/software-center/rest/v1/software/home/'),
      // ROOT_URL_SUGGEST: JSON.stringify('/suggest/?max=10&site=qc_en&client=qc_search_all_results&access=p&format=rich'),
      // ROOT_URL_METRICS: JSON.stringify('')
    }),
    new webpack.DefinePlugin({}),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      files: {
        js: ['index_bundle.js']
      }
    })
  ]
};
