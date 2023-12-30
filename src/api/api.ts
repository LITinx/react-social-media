import axios from 'axios'
import {
	AuthLoginDataType,
	AuthLoginType,
	AuthLogoutType,
	AuthMeType,
} from '../types/authReducerTypes.ts'
import { ProfileType } from './../types/profileReducerTypes.ts'
const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'ebc2eeb1-cd1a-42c9-a905-5afb240ec747',
	},
})

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},
	follow(id: number) {
		return instance.post(`follow/${id}`)
	},
	unfollow(id: number) {
		return instance.delete(`follow/${id}`)
	},
}

export const profileAPI = {
	getProfile(userId: number) {
		return instance.get(`profile/${userId}`).then((response) => response.data)
	},
	getStatus(userId: number) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status: string) {
		return instance.put('profile/status', { status })
	},
	savePhoto(photoFile: any) {
		const formData = new FormData()
		formData.append('image', photoFile)
		return instance.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
	saveProfile(data: ProfileType) {
		return instance.put('profile', data)
	},
}

export const authAPI = {
	me() {
		return instance.get<AuthMeType>('auth/me').then((response) => response.data)
	},
	login({ email, password, rememberMe, captcha }: AuthLoginDataType) {
		return instance
			.post<AuthLoginType>('auth/login', {
				email,
				password,
				rememberMe,
				captcha,
			})
			.then((res) => res.data)
	},
	logout() {
		return instance.post<AuthLogoutType>('auth/logout').then((res) => res.data)
	},
}

export const securityApi = {
	getCaptchaUrl() {
		return instance.get('security/get-captcha-url')
	},
}
