import React from 'react'
import { Route, Redirect } from 'react-router-dom'

  
const a = (props)=>{
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

export default a
