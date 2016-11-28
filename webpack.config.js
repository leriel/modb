var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css-loader?minimize!sass-loader') }
    ]
  },
  entry: {
    modb: './src/styles/modb.scss',
    items: './src/styles/items.scss',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'nop.css',
  },
  plugins: [
    new ExtractTextPlugin('./styles/[name].[chunkhash:8].css'),
  ],
  resolve: { extensions: ['', '.js', '.jsx','.css']},
}
