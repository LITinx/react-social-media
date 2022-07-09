import { combineReducers, createStore } from 'redux'
import messagesReducer from './reducers/messagesReducer'
import profileReducer from './reducers/profileReducer'
import sidebarReducer from './reducers/sidebarReducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sidebar: sidebarReducer,
})

const store = createStore(rootReducer)
export default store
