const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		sketch: './src/sketch.js',
	},
	output :{
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
	},
	module: {
		rules: [
			{ test: /\.hbs$/, use: 'handlebars-loader', },
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/, },
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.hbs',
			filename: 'index.html',
			title: 'Processing | Mouse Interaction',
			description: 'A simple example, just to get started',
		}),
		// TODO: implement clean webpack plugin
	],
};
