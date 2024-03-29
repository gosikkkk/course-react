import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";


const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                        validate={[required, maxLength50]}
                        name="newMessageBody" 
                        placeholder="Enter your message"
                        />
            </div>   
               
            <div>
                <button>Send</button>
            </div> 
        </form>
    )
}
       
export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

 