import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class ApplicationMsg extends Component {
  render() {
    return (
    	<div>
      		{(this.props.msg && <Alert color={this.props.type}>{this.props.msg}</Alert>)}
      	</div>
    )
  }
}

export default ApplicationMsg