const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message:'Hi'},
        {id: 2, message:'how are you'},
        {id: 3, message:'bye'},
        {id: 4, message:'bla'}
      ],

      dialogs: [
        {id: 1, name: 'Rita'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Karina'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Arseniy'},
    ],
    newMessageBody:""
}

export const dialogsReduser = (state = initialState,action) =>{

    switch (action.type ){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body

            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body} ],
                newMessageBody: ''
            };
        default:
            return state;
    }
}

export const sendMessageCreacter = () => ({type: SEND_MESSAGE}) 
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReduser;