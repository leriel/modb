var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [
        'react-hot',
        'babel'
      ],
      include: path.join(__dirname, 'src'),
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test: /\.json$/,
      loader: 'json',
    },
    ]
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/scripts/modb.jsx',
    './src/styles/modb.scss',
    './src/styles/items.scss',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: { extensions: ['', '.js', '.jsx', '.css', '.json']},
}
