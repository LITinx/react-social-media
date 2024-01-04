import { AuthLoginDataType } from '../redux/reducers/authReducer'
import {
	APIResponseType,
	ResultCode,
	ResultCodeForCaptcha,
	instance,
} from './api'

type MeDataType = {
	id: number
	email: string
	login: string
}
type LoginDataType = {
	userId: number
}
type CaptchaType = {
	url: string
}

export const authApi = {
	me() {
		return instance
			.get<APIResponseType<MeDataType>>('auth/me')
			.then((response) => response.data)
	},
	login({ email, password, rememberMe, captcha }: AuthLoginDataType) {
		return instance
			.post<APIResponseType<LoginDataType, ResultCode | ResultCodeForCaptcha>>(
				'auth/login',
				{
					email,
					password,
					rememberMe,
					captcha,
				},
			)
			.then((res) => res.data)
	},
	logout() {
		return instance.post<APIResponseType>('auth/logout').then((res) => res.data)
	},
}

export const securityApi = {
	getCaptchaUrl() {
		return instance
			.get<CaptchaType>('security/get-captcha-url')
			.then((res) => res.data)
	},
}
