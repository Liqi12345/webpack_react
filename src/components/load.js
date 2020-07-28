
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import baseCss from '../app.css'

let defaultState = {
  alertStatus:false,
  alertTip:"提示",
  closeAlert:function(){}
}

class Load extends Component {
	

	constructor(props){
		super(props)
		this.state={
			...defaultState
		}
		this.open = (options={}) => {
	    	options.alertStatus = true;
		    this.setState({
		      ...defaultState,
		      ...options
		    })
		    this.state.closeAlert();
		}
	
	 this.close = (options={}) => {
	 	options.alertStatus = false;
	    this.setState({
	      ...defaultState,
	      ...options
	    })
	    this.state.closeAlert();
	}
	console.log(8888)
	console.log(props, '//')

	}
	

	
	render(){
		return(
			<div id={baseCss.load} style={this.state.alertStatus? {display:'block'}:{display:'none'}}>
				<div>
					<img src={require("../assets/loading.gif")}/>
					<p>{this.state.alertTip}</p>
				</div>
			</div>
		)
	}

	

}


let div = document.createElement('div');
let props = {
};
document.body.appendChild(div);
 
let Box = ReactDOM.render(React.createElement(
  Load,
  props
),div);
export default Box