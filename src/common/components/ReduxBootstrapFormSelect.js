import React, {
	Component
} from 'react'
import { FormGroup, Label, FormText, FormFeedback, Input } from 'reactstrap'

class ReduxBootstrapFormSelect extends Component {
	render(){
		const { 
			input, 
			label, 
			type, 			
			meta: { error, warning, touched, valid }, 
			helpertext,
			feedbackIcon, 			
			options,			
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
	     		<Input {...input} type={type} {...props} valid={valid}>
	     			{ options.length > 0 && options.map((option,i) => <option key={i} value={option.value}>{option.label}</option>)}
	     		</Input>
	     		{ feedbackIcon ? <FormFeedback>{ feedbackIcon }</FormFeedback> : null }
                { message }
	    	</FormGroup>
		)
	}
}

export default ReduxBootstrapFormSelect
/*
	     		
*/