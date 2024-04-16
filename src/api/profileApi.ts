import { PhotosType, ProfileType } from './../types/profileReducerTypes.ts'
import { APIResponseType, instance } from './api.ts'

type SavePhotoResponseDataType = {
	photos: PhotosType
}

export const profileAPI = {
	async getProfile(userId: number) {
		return await instance
			.get<ProfileType>(`profile/${userId}`)
			.then((response) => response.data)
	},
	async getStatus(userId: number) {
		return await instance.get<string>(`profile/status/${userId}`)
	},
	async updateStatus(status: string) {
		return await instance
			.put<APIResponseType>('profile/status', { status })
			.then((res) => res.data)
	},
	async savePhoto(photoFile: File) {
		const formData = new FormData()
		formData.append('image', photoFile)
		return await instance
			.put<APIResponseType<SavePhotoResponseDataType>>(
				'profile/photo',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
			)
			.then((res) => res.data)
	},
	async saveProfile(data: ProfileType) {
		return await instance
			.put<APIResponseType>('profile', data)
			.then((res) => res.data)
	},
}
