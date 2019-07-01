const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageSpritePlugin = require('image-sprite-webpack-plugin');

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, 'src/js/app.js'),
    path.resolve(__dirname, 'src/sass/style.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new ImageSpritePlugin({
      commentOrigin: false,
      compress: false,
      extensions: ['gif', 'png'],
      indent: '  ',
      log: true,
      outputFilename: '/images/sprite-[hash].png',
      padding: 10,
      suffix: '?' + Date.now()
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?outputStyle=expanded'
          // 'sass-loader?outputStyle=compressed'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/images/[name]-[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map'
};
