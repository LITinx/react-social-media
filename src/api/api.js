import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'ebc2eeb1-cd1a-42c9-a905-5afb240ec747',
	},
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},
	follow(id) {
		return instance.post(`follow/${id}`)
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`)
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then((response) => response.data)
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put('profile/status', { status })
	},
	savePhoto(photoFile) {
		const formData = new FormData()
		formData.append('image', photoFile)
		return instance.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}

export const authAPI = {
	me() {
		return instance.get('auth/me').then((response) => response.data)
	},
	login({ email, password, rememberMe }) {
		return instance.post('auth/login', {
			email,
			password,
			rememberMe,
		})
	},
	logout() {
		return instance.post('auth/logout')
	},
}