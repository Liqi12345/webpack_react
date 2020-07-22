var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = 'development'//production
var website = {
	path:'http://192.168.1.183:8080/'
}
module.exports = {
	//入口文件
	entry: {
		index: './src/main.js'
	},
	output: {
		path:path.resolve(__dirname,'dist'),
		filename:'app.js'
	},
	module: {

		rules: [{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader:'css-loader',
						options: {
							modules: { localIdentName: '[path][name]-[local]-[hash:5]'}
						}
					}
				]
		},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}

				}
			},
			{
				test: /\.(bmp|png|jpg|jpeg|ico|gif)$/,
				use: [{
					loader: 'file-loader',
					
					options: {
						limit: 1024, // 文件小于10kb，输出DataUrl
						outputPath: 'img', 
//						publicPath:'img',//背景图路径
						name: '[name].[ext]',
						esModule: false, // 这里设置为false
					}
				}]
			},
			{
				test:/\.(htm|html)$/i,
    			use:['html-withimg-loader']
			}

		]
	},
	devServer:{
		contentBase:path.resolve(__dirname,'src'),

		compress:true,
		port:8080
	},
	plugins: [
        new HtmlWebpackPlugin({
			title:'test李琪',
			template:'./src/index.html',
			filename:'index.html',
			minify:{
				 collapseWhitespace: true,
				 removeComments: true,
				 removeRedundantAttributes: true,
				 removeScriptTypeAttributes: true,
				 removeStyleLinkTypeAttributes: true,
				 useShortDoctype: true
				 
			},
			hash:true,

		}),
		new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
	]
	
};