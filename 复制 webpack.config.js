var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	//入口文件
	entry: {
		index: './src/js/main.js'
	},
	output: {
		path: buildPath, //编译后的文件路径
		filename: 'app.js'
	},
	module: {

		rules: [{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,"css-loader"]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.js$/,
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
					loader: 'url-loader',
					
					options: {
						limit: 102, // 文件小于10kb，输出DataUrl
						outputPath: 'img', 
						publicPath: 'img',//背景图路径
						name: '[name].[ext]',
						esModule: false, // 这里设置为false
					}
				}]
			},
		
			{
			    test:/\.html$/,
			    loader:'html-withimg-loader'
			}

		]
	},
	plugins: [
		new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new HtmlWebpackPlugin({
        	template:'./src/tem.html',
        	title: 'test parameter',
            //html压缩
            minify:{
                //删除注释
                removeComments:true,
                //删除空格
                collapseWhitespace:true
            }
        })
	],
	devServer: {
		inline: true,
		port: 8886
	}
};