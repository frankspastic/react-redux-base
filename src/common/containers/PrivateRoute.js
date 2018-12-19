import React, {
	Component
} from 'react';
import { connect } from 'react-redux'

import {	
	Route,
	Redirect
} from 'react-router-dom'

import { displayApplicationMsg } from '../actions'

class PrivateRoute extends Component {	
	componentDidMount() {
		const { isLoggedIn, hasPermission }  = this.props
		if(!isLoggedIn){
			this.props.dispatch(displayApplicationMsg('danger','Please login.'))	
		} else if(!hasPermission){
			this.props.dispatch(displayApplicationMsg('danger','Insufficient permissions.'))	
		}
	}

	render(){
		const { isLoggedIn, hasPermission, component: Component, ...rest }  = this.props

		return (
	    <Route {...rest} render={props => {
	      if(isLoggedIn === true && hasPermission === true){
	        return (<Component {...props}/>)
	      } else {        					  
	        return (<Redirect to={{
	          pathname: '/'      
	        }}/>)
	      }         
	    }} />    
	  )
	}  
}

export default connect()(PrivateRoute)
