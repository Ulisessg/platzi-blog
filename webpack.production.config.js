const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[hash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpg|svg|gif|eot|ttf|mp4|webm)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all', minSize: 0, maxSize: 20000 },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'production/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssAssetsPlugin(),
  ],
};
