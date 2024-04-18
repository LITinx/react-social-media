import { APIResponseType, GetItemsType, instance } from './api'

export const usersAPI = {
	async getUsers(
		currentPage: number,
		pageSize: number,
		query: string = '',
		friend?: boolean,
	) {
		return await instance
			.get<GetItemsType>(
				`users?page=${currentPage}&count=${pageSize}&term=${query}&${
					friend && 'friend=' + friend
				}`,
			)
			.then((res) => res.data)
	},
	async searchUsers(query: string, pageSize: number) {
		return await instance
			.get<GetItemsType>(`users?term=${query}&count=${pageSize}`)
			.then((res) => res.data)
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
