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
	getProfile(userID) {
		return instance.get(`profile/${userID}`).then((response) => response.data)
	},
}

export const authAPI = {
	me() {
		return instance.get('auth/me').then((response) => response.data)
	},
}
