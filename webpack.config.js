
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
	mode: 'development',
	devtool: 'source-map',
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
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
};
