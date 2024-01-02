import axios from 'axios'
import { UserType } from '../types/usersReducerTypes'
export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'ebc2eeb1-cd1a-42c9-a905-5afb240ec747',
	},
})

export enum ResultCode {
	Success = 0,
	Error = 1,
}
export enum ResultCodeForCaptcha {
	CaptchaIsRequired = 10,
}

export type ResponseType<D = {}, RC = ResultCode> = {
	resultCode: RC
	messages: Array<string>
	data: D
}

export type GetItemsType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}
