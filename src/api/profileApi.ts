import { PhotosType, ProfileType } from './../types/profileReducerTypes.ts'
import { ResponseType, instance } from './api.ts'

export const profileAPI = {
	getProfile(userId: number) {
		return instance
			.get<ProfileType>(`profile/${userId}`)
			.then((response) => response.data)
	},
	getStatus(userId: number) {
		return instance.get<string>(`profile/status/${userId}`)
	},
	updateStatus(status: string) {
		return instance
			.put<ResponseType>('profile/status', { status })
			.then((res) => res.data)
	},
	savePhoto(photoFile: any) {
		const formData = new FormData()
		formData.append('image', photoFile)
		return instance
			.put<ResponseType<PhotosType>>('profile/photo', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => res.data)
	},
	saveProfile(data: ProfileType) {
		return instance.put<ResponseType>('profile', data).then((res) => res.data)
	},
}
