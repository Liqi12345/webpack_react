import React  from 'react'
import childCss from './index.css'
import { GetUrlParam } from '../../lib/utils'
const Child  = (props) =>{
		
		return(
			<div>
				<h2>
					{GetUrlParam('title')}
				</h2>
			</div>
		)
	
}
export default Child