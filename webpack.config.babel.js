import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{
			test: /\.js/,
			exclude: /(node_modules|bower_components)/,
			use: [{
				loader: 'babel'
			}]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Custom template',
			template: path.join(__dirname, 'src/index.template.html')
		})
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
