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

export type RootReducerType = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type ActionsTypes<
	T extends { [key: string]: (...args: any[]) => void },
> = ReturnType<PropertiesType<T>>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store
export default store
