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
    ]
}

export const dialogsReduser = (state = initialState,action) =>{

    switch (action.type ){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body} ],
            };
        default:
            return state;
    }
}

export const sendMessageCreacter = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody}) 

export default dialogsReduser;