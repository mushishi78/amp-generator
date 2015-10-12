var StaticWebpackPlugin = require('static-webpack-plugin');
var AddCSSToHeadPlugin = require('add-css-to-head-plugin');

module.exports = {
  entry: './static.js',
  output: {
    path: './public',
    libraryTarget: 'umd',
    filename: 'static.js',
    publicPath: '/amp-generator'
  },
  module: {
    loaders: [
      { test: /\.js$/,  loader: 'babel' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: 'raw' },
      { test: /\.md$/,  loader: 'markdown-with-front-matter' }
    ]
  },
  devServer: { contentBase: './public' },
  plugins: [
    new StaticWebpackPlugin('static.js'),
    new AddCSSToHeadPlugin({ amp: true })
  ]
};
