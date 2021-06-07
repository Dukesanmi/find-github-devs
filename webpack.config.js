//swx2\|""` SWX
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack');


module.exports = {
	entry: './src/script.js',
	output: {
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/}
		]
	},
	devServer: {
		contentBase: 'src',
		hot: true,
		open: true,
		port: 3000,
		watchContentBase: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/profile.html',
			filename: 'profile.html',
			inject: 'body'
		}),
		new dotenv()
	]
}