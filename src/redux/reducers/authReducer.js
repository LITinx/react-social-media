import { authAPI } from '../../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_AUTH = 'SET_AUTH'
const LOGIN = 'LOGIN'
const initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
}

export default (state = initialState, { type, data, userId }) => {
	switch (type) {
		case SET_AUTH_USER_DATA:
			return { ...state, ...data }
		case SET_AUTH:
			return { ...state, isAuth: true }
		case LOGIN:
			return { ...state, userId, isAuth: true }
		default:
			return state
	}
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	data: { userId, login, email, isAuth },
})

export const setAuth = () => ({
	type: SET_AUTH,
})
export const login = (userId) => ({
	type: LOGIN,
	userId,
})
export const authMe = () => (dispatch) => {
	authAPI.me().then((data) => {
		const { id, login, email } = data.data
		if (data.resultCode === 0) dispatch(setAuth())
		dispatch(setAuthUserData(id, login, email, true))
	})
}
export const authLogin = (data) => (dispatch) => {
	authAPI.login(data).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(authMe())
		}
	})
}
export const authLogout = () => (dispatch) => {
	authAPI.logout().then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}
