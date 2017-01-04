var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: ['babel'],
      include: path.join(__dirname, 'src'),
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css-loader?minimize!sass-loader'),
    }, {
      test: /\.json$/,
      loader: 'json',
    },
    ]
  },
  entry: {
    'app': [
      './src/scripts/modb.jsx',
      './src/styles/modb.scss',
      './src/styles/items.scss',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:8].js',
  },
  plugins: [
    new ProgressBarPlugin({ clear: false }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    new ExtractTextPlugin('./styles/[name].[chunkhash:8].css', {allChunks: true}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      exclude: /vendor\/.+\.js/,
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html.template',
      minify: {
        removeComments: false,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new CopyWebpackPlugin([
      { context: 'src/scripts/vendor', from: '*', to: './js/vendor' },
      { context: 'src/images', from: 'favicon.ico', to: '.' },
    ])
  ],
  resolve: { extensions: ['', '.js', '.jsx', '.css', '.json']},
}
