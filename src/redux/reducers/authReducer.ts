// @ts-ignore
import { authAPI, securityApi } from '../../api/api'
import {
	AuthInitialState,
	AuthLoginDataType,
	AuthResponseType,
	GetCaptchaUrlSuccessActionType,
	LoginActionType,
	SetAuthUserDataActionType,
	SetErrorMessageActionType,
} from '../../types/authReducerTypes'

export const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
export const LOGIN = 'auth/LOGIN'
export const SET_ERROR = 'auth/SET_ERROR'
export const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

const initialState: AuthInitialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
	errorMessage: '',
	captchaUrl: null, // if captcha is null, captcha is not required
}

export default (
	state: AuthInitialState = initialState,
	{ type, data, userId, errorMessage, captchaUrl }: any,
): AuthInitialState => {
	switch (type) {
		case SET_AUTH_USER_DATA:
			return { ...state, ...data }
		case LOGIN:
			return { ...state, userId, isAuth: true }
		case SET_ERROR:
			return { ...state, errorMessage }
		case GET_CAPTCHA_URL:
			return { ...state, captchaUrl }
		default:
			return state
	}
}

export const setAuthUserData = (
	userId: number | null,
	login: string | null,
	email: string | null,
	isAuth: boolean,
): SetAuthUserDataActionType => ({
	type: SET_AUTH_USER_DATA,
	data: { userId, login, email, isAuth },
})

export const setErrorMessage = (
	errorMessage: string,
): SetErrorMessageActionType => ({
	type: SET_ERROR,
	errorMessage,
})

export const getCaptchaUrlSuccess = (
	captchaUrl: string | null,
): GetCaptchaUrlSuccessActionType => ({
	type: GET_CAPTCHA_URL,
	captchaUrl,
})

export const login = (userId: number): LoginActionType => ({
	type: LOGIN,
	userId,
})
export const authMe = () => (dispatch: any) => {
	return authAPI.me().then((data: AuthResponseType) => {
		const { id, login, email } = data.data
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(id, login, email, true))
		}
	})
}

export const authLogin = (data: AuthLoginDataType) => (dispatch: any) => {
	authAPI.login(data).then((response: any) => {
		if (response.data.resultCode === 0) {
			dispatch(authMe())
			dispatch(getCaptchaUrlSuccess(null))
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl())
			}
			const message = response.data.messages
				? response.data.messages[0]
				: 'Some Error'
			dispatch(setErrorMessage(message))
		}
	})
}
export const authLogout = () => (dispatch: any) => {
	authAPI.logout().then((response: any) => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}
export const getCaptchaUrl = () => async (dispatch: any) => {
	const response = await securityApi.getCaptchaUrl()
	const captchaUrl = response.data.url
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}
