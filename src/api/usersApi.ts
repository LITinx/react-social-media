import { APIResponseType, GetItemsType, instance } from './api'

export const usersAPI = {
	async getUsers(currentPage: number, pageSize: number) {
		return await instance
			.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},
	async follow(id: number) {
		return await instance
			.post<APIResponseType>(`follow/${id}`)
			.then((res) => res.data)
	},
	async unfollow(id: number) {
		return await instance
			.delete<APIResponseType>(`follow/${id}`)
			.then((res) => res.data)
	},
}
