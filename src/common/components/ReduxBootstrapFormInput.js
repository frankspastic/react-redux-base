import React, {
	Component
} from 'react'
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'

class ReduxBootstrapFormInput extends Component {
	render(){
		const { 
			input, 
			label, 
			type, 
			helpertext,
			feedbackIcon, 
			meta: { error, warning, touched, valid}, 
			...props
		} = this.props

		let message		  

        if ( touched && ( error || warning ) ) {
            message = <FormText className="text-danger">{ error || warning }</FormText>;            
        }

		return(
			<FormGroup>
	     		<Label>{label}</Label>
	     		{ helpertext && <FormText>{helpertext}</FormText>}
	     		<Input {...input} type={type} {...props} valid={valid} /> 
	     		{ feedbackIcon ? <FormFeedback>{ feedbackIcon }</FormFeedback> : null }
                { message }
	    	</FormGroup>
		)
	}
}

export default ReduxBootstrapFormInput