import { SubmissionError } from 'redux-form'

// With redux-form, if the field is blank, it won't be included in the object
export const fieldsFilledIn = (expected_fields, values) => {
	// All required fields		
	let errorObj = {}
	expected_fields.forEach((field_name) => {
	    if (!values.hasOwnProperty(field_name)) {
	    	errorObj[field_name] = "Required Field." 			       						
	    }
	})
	if(Object.keys(errorObj).length !== 0){
		throw new SubmissionError(errorObj)
	}
	
	return true	
}