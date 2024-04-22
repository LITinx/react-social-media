import { PhotosType } from './profileReducerTypes'
export type UserType = {
	name: string
	id: number
	photos: PhotosType
	status: string
	followed: boolean
}

export type UsersReducerInitialStateType = {
	users: Array<UserType>
	pageSize: number
	totalCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: Array<number>
	query: string
	isFriend: boolean | undefined
}
