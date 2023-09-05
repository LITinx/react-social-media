import { authAPI } from '../../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const LOGIN = 'LOGIN'
const SET_ERROR = 'SET_ERROR'
const initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
	errorMessage: '',
}

export default (state = initialState, { type, data, userId, errorMessage }) => {
	switch (type) {
		case SET_AUTH_USER_DATA:
			return { ...state, ...data }
		case LOGIN:
			return { ...state, userId, isAuth: true }
		case SET_ERROR:
			return { ...state, errorMessage }
		default:
			return state
	}
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	data: { userId, login, email, isAuth },
})
export const setErrorMessage = (errorMessage) => ({
	type: SET_ERROR,
	errorMessage,
})

export const login = (userId) => ({
	type: LOGIN,
	userId,
})
export const authMe = () => (dispatch) => {
	return authAPI.me().then((data) => {
		const { id, login, email } = data.data
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(id, login, email, true))
		}
	})
}
export const authLogin = (data) => (dispatch) => {
	authAPI.login(data).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(authMe())
		} else {
			const message = response.data.messages
				? response.data.messages[0]
				: 'Some Error'
			dispatch(setErrorMessage(message))
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