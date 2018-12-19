import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../helpers/history'

import Full from './Full'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Router history={history}>
      	<Switch>
	      	<Route path="/" component={Full} />					 						  				
      	</Switch>
      </Router>      
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired  
}

export default Root
