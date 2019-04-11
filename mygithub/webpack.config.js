module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/app/js',
		publicPath: '/app/js/',
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query  :{
          					presets:['react','es2015']
        				},
				exclude: /node_modules/
			}
		]

	}
}