import { connect } from "react-redux";
import {sendMessageCreacter, updateNewMessageBodyCreator} from './../redux/dialogs-reduser'
import Dialogs from "./Dialogs";


let mapStateToProps = (state) =>{
    return{
        messagesPage: state.messagesPage

    }
}

let mapDispatchoProps = (dispatch) =>{
    return{
        sendMessage: () => {
            dispatch(sendMessageCreacter());
        },
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body));
        }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchoProps) (Dialogs);


export default DialogsContainer;