import React from 'react'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'
import { DialogItem } from './DialogItem/DialogItem'
import { Navigate } from 'react-router-dom'
import { AddMessageFormRedux } from './AddMessageForm/AddMessageForm'

const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogElements =
    state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} key={m.id} />
    ))

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>          
                {dialogElements}
            </div>

            {/* <div className={s.messages}>
                <div>{messagesElements}</div>
            </div> 

            <div className={s.send}>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div> */}
        </div>
    )
}

export default Dialogs
