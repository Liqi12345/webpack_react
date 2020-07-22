import React from 'react'
import {BrowserRouter,Route,Switch,HashRouter } from 'react-router-dom'

import appCss from '../pages/home/index.css'

const Back = (props)=>{
	
	const handleback = () =>{
		
		props.routeList.history.push({
			pathname:'/child',
			search:'?title=555'
		})
	}
	return(
		<img onClick={handleback} src={require('../assets/back.png')} className={appCss.goindex}/>
	)
}
export default Back