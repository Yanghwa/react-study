const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'wordRealy-setting',
  mode: 'development',
  devtool: 'eval',

  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client']
  },

  // loader
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                browsers: ['> 5%', 'last 2 versions'],
              },
              debug: true,
            }], 
            ['@babel/preset-react', {
              targets: {
                browsers: ['> 5%','last 2 versions'],
              },
            }]
          ],
        }
      }
    ],
  },
  // plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     debug: true,
  //     minimize: true,
  //   }),
  // ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'app.js'
  },
  devServer: {
    publicPath: '/dist/',
    // contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
  },
};