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
			{ test: /\.hbs$/, use: 'handlebars-loader', }
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.hbs',
			filename: 'index.html',
			title: 'Processing | Mouse Interaction',
			title: 'A simple example, just to get started',
		}),
		// TODO: implement clean webpack plugin
	],
};
