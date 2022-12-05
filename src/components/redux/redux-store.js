import {createStore, combineReducers} from 'redux'
import {profileReduser} from './profile-reduser'
import {dialogsReduser} from './dialogs-reduser'
import {sidebarReduser} from './sidebar-reduser'

let redusers = combineReducers({
    profilePage: profileReduser,
    messagesPage:dialogsReduser,
    sideBarPage: sidebarReduser,
});

export let store = createStore(redusers);

