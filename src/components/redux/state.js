import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import sidebarReduser from './sidebar-reduser'

export let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message:'Hi, how are you?', likesCount:12},
                {id: 2, message:"It's my first post", likesCount:23},
                {id: 3, message:"yesss", likesCount:23},
                {id: 4, message:"na offer", likesCount:23},
                {id: 5, message:"blabla", likesCount:23},
            ],
            newPostText:'write post'
        },
    
        messagesPage:{
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
    },
    _callSubscriber () {
        console.log('ghbdn')
    },

    getState(){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReduser (this._state.profilePage, action);
        this._state.messagesPage = dialogsReduser (this._state.messagesPage, action);
        this._state.sideBarPage = sidebarReduser (this._state.SideBarPage, action);

        this._callSubscriber(this._state)
    }
}
window.state = store;