import { combineReducers, createStore } from 'redux'
import authReducer from './reducers/authReducer'
import messagesReducer from './reducers/messagesReducer'
import profileReducer from './reducers/profileReducer'
import sidebarReducer from './reducers/sidebarReducer'
import usersReducer from './reducers/usersReducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

const store = createStore(rootReducer)
window.store = store
export default store
