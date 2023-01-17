import { authAPI } from '../../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_AUTH = 'SET_AUTH'
const initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
}

export default (state = initialState, { type, data }) => {
	switch (type) {
		case SET_AUTH_USER_DATA:
			return { ...state, ...data }
		case SET_AUTH:
			return { ...state, isAuth: true }
		default:
			return state
	}
}

export const setAuthUserData = (userId, login, email) => ({
	type: SET_AUTH_USER_DATA,
	data: { userId, login, email },
})

export const setAuth = () => ({
	type: SET_AUTH,
})

export const authMe = () => (dispatch) => {
	authAPI.me().then((data) => {
		const { id, login, email } = data.data
		if (data.resultCode === 0) dispatch(setAuth())
		dispatch(setAuthUserData(id, login, email))
	})
}
