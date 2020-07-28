import React from 'react'
import Back from '../../components/back'
import appCss from './index.css'
import {getMyPrize} from '../../api/index'

const Home = (props) =>{
	console.log(props)
	const showPrize = () =>{
		const res = getMyPrize()
		console.log(res)
	}
	return(
		<div>
			<Back routeList={props} />
			<div id={appCss.home}>
				<div className={appCss.rule}></div>
				<div className={appCss.btn}>
					<div className={appCss.detail}></div>
					<div className={appCss.join}></div>
					<div onClick= {showPrize} className={appCss.my_prize}></div>
				</div>
			</div>
		</div>
	)
}
export default Home