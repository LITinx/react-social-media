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
	async me() {
		return await instance
			.get<APIResponseType<MeDataType>>('auth/me')
			.then((response) => response.data)
	},
	async login({ email, password, rememberMe, captcha }: AuthLoginDataType) {
		return await instance
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
	async logout() {
		return await instance
			.post<APIResponseType>('auth/logout')
			.then((res) => res.data)
	},
}

export const securityApi = {
	async getCaptchaUrl() {
		return await instance
			.get<CaptchaType>('security/get-captcha-url')
			.then((res) => res.data)
	},
}
