import { APIResponseType, GetItemsType, instance } from './api'

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance
			.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},
	follow(id: number) {
		return instance
			.post<APIResponseType>(`follow/${id}`)
			.then((res) => res.data)
	},
	unfollow(id: number) {
		return instance
			.delete<APIResponseType>(`follow/${id}`)
			.then((res) => res.data)
	},
}
