import { createStore ,combineReducers, applyMiddleware, compose} from 'redux'
import profileReduser from './profile-reduser'
import {dialogsReduser} from './dialogs-reduser'
import {sidebarReduser} from './sidebar-reduser'
import usersReduser from './users-reduser';
import authReduser from './auth-reduser';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReduser from './app-reduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    messagesPage:dialogsReduser,
    sideBarPage: sidebarReduser,
    usersPage: usersReduser,
    auth:authReduser,
    form: formReducer,
    app: appReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)))

// window.__store__ = store;

export default store;