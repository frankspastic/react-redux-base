import React, {
	Component
} from 'react';
import { connect } from 'react-redux'

import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom'


import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-table/react-table.css'
import 'react-select/dist/react-select.css'

class Full extends Component {

	render() {
    const { isLoggedIn, permissions, location, links, applicationMsgType, applicationMsg } = this.props      
    
		return (
			<div className="app">
        <Header />
        <div className="app-body">
          <Sidebar links={links} location={location} />
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">  
              <ApplicationMsg type={applicationMsgType} msg={applicationMsg} />        
              <Switch>
                <Redirect from="/" to="/home"/>
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {  
  const {
    licTracker: {
      data
    }
  } = state

  return {    
    data
  }
}

export default connect(
  mapStateToProps
)(Full)