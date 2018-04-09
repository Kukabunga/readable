const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

module.exports = {
	entry: [
		"./src/app", "./src/styles/normalize"
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].js",
		publicPath: "/"
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					/** Minimum number of times a module has to be duplicated until it's considered for splitting */
					minChunks: 2,
					/** Maximum number of initial chunks which are accepted for an entry point */
					maxInitialRequests: 5,
					/** Minimal size for the created chunk */
					minSize: 0
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: false }
					}
				]
			},
			{
				test: /\.css$/, use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: {
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					publicPath: "/"
				})
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			inject: true
		}),
		new ExtractTextPlugin({
			filename: "css/[name].css?[hash]",
			disable: false,
			allChunks: true
		}),
		// new StyleExtHtmlWebpackPlugin(),
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom',
		})
	],
	devServer: {
		historyApiFallback: true
	}
}
