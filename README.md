npm init -y （生成package.json）

**安装webpack和 webpack-cli**

`npm i  webpack  webpack-cli`		

新建目录 src  新建index.html 引入	入口文件main.js

------

**安装	webpack-dev-server**

`npm i webpack-dev-server`		

**在package.json配置启动命令	,运行 npm run serve ，这时候浏览器将随着代码的改动而自动更新**

`“serve”:npx webpack-dev-server --mode development --output-public-path dist`

------

**安装	react**

`npm install react react-dom`	

**安装babel**

`npm install -D babel-loader@next @babel/core @babel/preset-react`	

**安装模块解析包**

`npm install -D file-loader css-loader style-loader html-webpack-plugin`

安装以后，在webpack.config.js 配置

```js
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');
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

		})
	]
	
};
```

**babel解析会报错，安装	@babel/plugin-transform-runtime**

`npm i @babel/plugin-transform-runtime`

**新建.babelrc，配置**

```js
{"plugins": [
      "@babel/plugin-transform-runtime"
 ]}
```

**安装react路由**

`npm i react-router-dom`

**配置路由**

```js

import Home from '../pages/Home/index'
import NoFound from '../pages/NoFound/index'

export const routeList = [
	{
		path:'/',
		name:'home',
		component:Home
	},
	{
	    name: '404',
	    path: '/404',
	    component: NoFound
	 }
]
```

**app.js 引入路由**

```jsx
import React,{Component} from 'react'
import {Switch,HashRouter } from 'react-router-dom'
import { routeList } from './router/index'
import FrontendAuth from './frontendAuth'

class App extends React.Component{
	
	render(){
		const toRouter = routeList[0];
		return(
			 <HashRouter>
          	<Switch>
          		<FrontendAuth routeList={routeList} />
          </Switch>
          </HashRouter>
			
		)
	}
}
export default App
```



**FrontendAuth 组件（筛选和当前地址栏路由匹配的路由跳转，没有就跳404）**

```jsx
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const currentRoute = (props)=>{
	console.log(props)
	const { pathname } = props.location;
	const findex = props.routeList.findIndex(item =>item.path == pathname)
	const toRouter = props.routeList[findex];
	
	console.log(findex)
	if(findex >= 0){
		return (
        <Route
          component={toRouter.component}
          exact
          key={toRouter.name}
          path={toRouter.path}
        />
      );
	}
	return (
          <Redirect
              to="/404"
            />
      );
}
export default currentRoute

```

**安装axios qs (调用接口)**

`npm i axios qs`

封装axios导出，方便调用和管理接口

webpack  命令打包

整体目录（红框为编写目录， 蓝框为打包后自动生成的目录）

![1595391106305](C:\Users\myf\AppData\Roaming\Typora\typora-user-images\1595391106305.png)

**总结：**

​	我是最近才开始学习react，正好公司经常有一些小型的活动项目需要开发，觉得每次用脚手架有点庞大，所以自己就学着搭建了。不过还有很多不足，所以这个只适用于微小型项目，一些小的活动开发，便于自己熟悉react。

**不足：**

​	很多地方还不完善，比如打包的时候开发环境和生产环境我目前不是很清楚区别，打包的文件过大如何分包，还有css目录的问题，很多有不足，这只是迈出了第一步，搭建这个主要是方便自己学习react进行开发，日后会再学习改进。