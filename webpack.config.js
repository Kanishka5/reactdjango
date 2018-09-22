var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {

  performance: { hints: false },

  context: __dirname,

  entry: './reactdj/polls/static/js/index',

  output: {
      path: path.resolve('./reactdj/polls/static/bundles/'),
      filename: "[name]-[hash].js",
  },



  
  plugins: [
    new BundleTracker({filename: './reactdj/webpack-stats.json'}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

};