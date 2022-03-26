const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    'js/main.js': './src/js/index.js',
    'js/banner': './src/js/banner.js',
    'js/tabs': './src/js/tabs.js',
    'js/upload': './src/js/upload.js',
    'js/chart': './src/js/chart.js',
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' },
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Translate new CSS to old CSS
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|webp|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  devServer: {
    port: 9000,
    open: true,
    static: {
      directory: path.join(__dirname, 'build'),
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/button.html',
      filename: 'components/button.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/textfield.html',
      filename: 'components/textfield.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/card.html',
      filename: 'components/card.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/components/banner.html',
      filename: 'components/banner.html',
      chunks: ['js/main.js', 'js/banner'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/list.html',
      filename: 'components/list.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/tabs.html',
      filename: 'components/tabs.html',
      chunks: ['js/main.js', 'js/tabs'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/upload.html',
      filename: 'components/upload.html',
      chunks: ['js/main.js', 'js/upload'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/help.html',
      filename: 'components/help.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/sammary.html',
      filename: 'components/sammary.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/actions.html',
      filename: 'components/actions.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/sidebar.html',
      filename: 'components/sidebar.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/table.html',
      filename: 'components/table.html',
      chunks: ['js/main.js'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/chart.html',
      filename: 'components/chart.html',
      chunks: ['js/main.js', 'js/chart'],
    }),

    new MiniCssExtractPlugin({ filename: 'css/style.css' }),

    new CssMinimizerPlugin(),
  ],
};
