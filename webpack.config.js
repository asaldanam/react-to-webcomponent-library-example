
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseComponentsPath = `${__dirname}/dist`;
module.exports = {
	entry: {
		'ui-example': [ './src/webcomponents/ui-example.js' ],
		'ui-table': [ './src/webcomponents/ui-table.js' ],
	},
	output: {
		path: `${baseComponentsPath}`,
		filename: '[name].min.js'
	},
	mode: 'production',
	// devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /(node_modules|dist)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ],
						plugins: [
							[ '@babel/plugin-proposal-decorators', { legacy: true } ],
							[ '@babel/plugin-proposal-class-properties', { loose: true } ]
						]
					}
				}
			}
		]
	},
	plugins: [],
  optimization: {
    minimizer: [new TerserWebpackPlugin({})],
  },
	performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
};
