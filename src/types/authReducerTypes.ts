import {
	GET_CAPTCHA_URL,
	LOGIN,
	SET_AUTH_USER_DATA,
	SET_ERROR,
} from '../redux/reducers/authReducer'

export type AuthInitialState = {
	userId: number | null
	login: string | null
	email: string | null
	isAuth: boolean
	errorMessage: string
	captchaUrl: string | null
}

type SetAuthUserDataPayloadType = {
	userId: number | null
	login: string | null
	email: string | null
	isAuth: boolean
}
export type SetAuthUserDataActionType = {
	type: typeof SET_AUTH_USER_DATA
	data: SetAuthUserDataPayloadType
}

export type SetErrorMessageActionType = {
	type: typeof SET_ERROR
	errorMessage: string
}
export type GetCaptchaUrlSuccessActionType = {
	type: typeof GET_CAPTCHA_URL
	captchaUrl: string | null
}

export type LoginActionType = {
	type: typeof LOGIN
	userId: number
}

type DataType = {
	id: number
	login: string
	email: string
}

export type AuthResponseType = {
	data: DataType
	resultCode: number
}
export type AuthLoginDataType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}
