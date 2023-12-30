export enum AuthActionType {
	SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA',
	LOGIN = 'auth/LOGIN',
	SET_ERROR = 'auth/SET_ERROR',
	GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL',
}
export enum ResultCode {
	Success = 0,
	Error = 1,
	CaptchaIsRequired = 10,
}
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
	type: AuthActionType.SET_AUTH_USER_DATA
	data: SetAuthUserDataPayloadType
}

export type SetErrorMessageActionType = {
	type: AuthActionType.SET_ERROR
	errorMessage: string
}
export type GetCaptchaUrlSuccessActionType = {
	type: AuthActionType.GET_CAPTCHA_URL
	captchaUrl: string | null
}

export type LoginActionType = {
	type: AuthActionType.LOGIN
	userId: number
}

export type AuthAction =
	| SetAuthUserDataActionType
	| SetErrorMessageActionType
	| GetCaptchaUrlSuccessActionType
	| LoginActionType

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
export type AuthLogoutResponseActionType = {
	resultCode: number
}
export type AuthMeType = {
	resultCode: number
	messages: Array<string>
	data: DataType
}
export type AuthCaptchaUrlType = { data: { url: string } }

export type AuthLoginType = {
	resultCode: number
	messages: Array<string>
	data: {
		userId: number
	}
}

export type AuthLogoutType = {
	resultCode: number
	messages: Array<string>
	data: {}
}
