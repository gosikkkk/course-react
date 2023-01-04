import { connect } from "react-redux";
import {sendMessageCreacter} from './../redux/dialogs-reduser'
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from 'redux'

let mapStateToProps = (state) =>{
    return{
        messagesPage: state.messagesPage,
    }
}

let mapDispatchoProps = (dispatch) =>{
    return{
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreacter(newMessageBody));
        }
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchoProps),
    withAuthRedirect
)
(Dialogs);