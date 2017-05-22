import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
  'webpack-hot-middleware/client',
  path.join(__dirname, '/client/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: '/',
    publicPath: '/'
  },
  plugins: [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: [ 'react-hot-loader', 'babel-loader' ]
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(?:png|jpg|svg)$/,
      loader: 'url-loader',
      query: {
        // Inline images smaller than 10kb as data URIs
        limit: 10000
      }
    }
    ]
  },
  resolve: {
    extensions: [ ' ', '.js' ]
  }
}