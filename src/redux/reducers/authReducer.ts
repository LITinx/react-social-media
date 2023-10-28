import { Dispatch } from 'redux'
// @ts-ignore
import { authAPI, securityApi } from '../../api/api'
import {
	AuthAction,
	AuthActionType,
	AuthCaptchaUrlType,
	AuthInitialState,
	AuthLoginDataType,
	AuthLoginType,
	AuthLogoutResponseActionType,
	AuthResponseType,
	GetCaptchaUrlSuccessActionType,
	LoginActionType,
	SetAuthUserDataActionType,
	SetErrorMessageActionType,
} from '../../types/authReducerTypes'

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
	payload: AuthAction,
): AuthInitialState => {
	switch (payload.type) {
		case AuthActionType.SET_AUTH_USER_DATA:
			return { ...state, ...payload.data }
		case AuthActionType.LOGIN:
			return { ...state, userId: payload.userId, isAuth: true }
		case AuthActionType.SET_ERROR:
			return { ...state, errorMessage: payload.errorMessage }
		case AuthActionType.GET_CAPTCHA_URL:
			return { ...state, captchaUrl: payload.captchaUrl }
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
	type: AuthActionType.SET_AUTH_USER_DATA,
	data: { userId, login, email, isAuth },
})

export const setErrorMessage = (
	errorMessage: string,
): SetErrorMessageActionType => ({
	type: AuthActionType.SET_ERROR,
	errorMessage,
})

export const getCaptchaUrlSuccess = (
	captchaUrl: string | null,
): GetCaptchaUrlSuccessActionType => ({
	type: AuthActionType.GET_CAPTCHA_URL,
	captchaUrl,
})

export const login = (userId: number): LoginActionType => ({
	type: AuthActionType.LOGIN,
	userId,
})
export const authMe = () => (dispatch: Dispatch<AuthAction>) => {
	return authAPI.me().then((data: AuthResponseType) => {
		const { id, login, email } = data.data
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(id, login, email, true))
		}
	})
}

export const authLogin = (data: AuthLoginDataType) => (dispatch: any) => {
	authAPI.login(data).then((response: AuthLoginType) => {
		console.log(response)

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

export const authLogout = () => (dispatch: Dispatch<AuthAction>) => {
	authAPI.logout().then((response: AuthLogoutResponseActionType) => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}
export const getCaptchaUrl = () => async (dispatch: Dispatch<AuthAction>) => {
	const response: AuthCaptchaUrlType = await securityApi.getCaptchaUrl()
	const captchaUrl = response.data.url
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}
