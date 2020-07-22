
import Home from '../pages/Home/index'
import Child from '../pages/Child/index'
import NoFound from '../pages/NoFound/index'

export const routeList = [
	{
		path:'/',
		name:'home',
		component:Home
	},
	{
		path:'/child',
		name:'child',
		component:Child
	},
	{
	    name: '404',
	    path: '/404',
	    component: NoFound
	 }
]
