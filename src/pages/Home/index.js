import React from 'react'
import Back from '../../components/back'
import appCss from './index.css'

const Home = (props) =>{
	console.log(props)
	return(
		<div>
			<Back routeList={props} />
			<div id={appCss.home}>
				<div className={appCss.rule}></div>
				<div className={appCss.btn}>
					<div className={appCss.detail}></div>
					<div className={appCss.join}></div>
					<div className={appCss.my_prize}></div>
				</div>
			</div>
		</div>
	)
}
export default Home