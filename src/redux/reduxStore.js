import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './reducers/appReducer'
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
	app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
window.store = store
export default store
