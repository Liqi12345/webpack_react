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