import { ResultCode, ResultCodeForCaptcha } from '../../api/api'
import { authApi, securityApi } from '../../api/authApi'
import { ActionsTypes, BaseThunkType } from '../reduxStore'

type AuthInitialState = {
	userId: number | null
	login: string | null
	email: string | null
	isAuth: boolean
	errorMessage: string
	captchaUrl: string | null
}
export type AuthLoginDataType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

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
		case 'SET_AUTH_USER_DATA':
			return { ...state, ...payload.data }
		case 'SET_ERROR':
			return { ...state, errorMessage: payload.errorMessage }
		case 'GET_CAPTCHA_URL':
			return { ...state, captchaUrl: payload.captchaUrl }
		default:
			return state
	}
}

export type AuthAction = ActionsTypes<typeof actions>
type AuthThunkType = BaseThunkType<AuthAction>

const actions = {
	setAuthUserData: (
		userId: number | null,
		login: string | null,
		email: string | null,
		isAuth: boolean,
	) =>
		({
			type: 'SET_AUTH_USER_DATA',
			data: { userId, login, email, isAuth },
		} as const),

	setErrorMessage: (errorMessage: string) =>
		({
			type: 'SET_ERROR',
			errorMessage,
		} as const),

	getCaptchaUrlSuccess: (captchaUrl: string | null) =>
		({
			type: 'GET_CAPTCHA_URL',
			captchaUrl,
		} as const),
}
export const authMe = (): AuthThunkType => (dispatch) => {
	return authApi.me().then((response) => {
		const { id, login, email } = response.data
		if (response.resultCode === ResultCode.Success) {
			dispatch(actions.setAuthUserData(id, login, email, true))
		}
	})
}

export const authLogin =
	(data: AuthLoginDataType): AuthThunkType =>
	(dispatch) => {
		return authApi.login(data).then((response) => {
			if (response.resultCode === ResultCode.Success) {
				dispatch(authMe())
				dispatch(actions.getCaptchaUrlSuccess(null))
			} else {
				if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
					dispatch(getCaptchaUrl())
				}
				const message = response.messages ? response.messages[0] : 'Some Error'
				dispatch(actions.setErrorMessage(message))
			}
		})
	}

export const authLogout = (): AuthThunkType => (dispatch) => {
	return authApi.logout().then((response) => {
		if (response.resultCode === ResultCode.Success) {
			dispatch(actions.setAuthUserData(null, null, null, false))
		}
	})
}
export const getCaptchaUrl = (): AuthThunkType => async (dispatch) => {
	const response = await securityApi.getCaptchaUrl()
	const captchaUrl = response.url
	dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}
