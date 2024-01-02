export type AuthInitialState = {
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
