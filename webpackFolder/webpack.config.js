var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var htmlWebpackPulgin = require('html-webpack-plugin');
var webpack = require('webpack');
var url = require('url-loader');
const { pathToFileURL } = require('url');

module.exports = {
	mode: 'none',
	entry: './index.js',
	output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js'
	},
	module: {
		rules: [
      {
      test: /\.css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        "css-loader"
      ]
      // use: ['style-loader','css-loader','sass-loader']/
		  },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',

            }
          },
        ]
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         name: 'images/[name].[ext]',

      //       }
      //     },
      //   ]
      // },
    ]
	},
  devServer: {
    static: {
      // https://webpack.js.org/configuration/dev-server/#directory
      directory: path.join(__dirname, 'dist'), //
    },
    // https://webpack.js.org/configuration/dev-server/#devserveropen
    open: true,
    // https://webpack.js.org/configuration/dev-server/#devserverport
    port: 'auto'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new htmlWebpackPulgin({
      template: 'index.html'
    })

  ],
	stats: {
			colors: true
	},
	devtool: 'source-map'
};
