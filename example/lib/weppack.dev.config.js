const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		sketch: './src/sketch.js',
	},
	output :{
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
	},
};
