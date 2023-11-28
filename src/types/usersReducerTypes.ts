import { ThunkAction } from 'redux-thunk'
import { PhotosType } from './profileReducerTypes'
import { RootReducerType } from '../redux/reduxStore'

export enum UsersActionType {
	FOLLOW = 'users/FOLLOW',
	UNFOLLOW = 'users/UNFOLLOW',
	SET_USERS = 'users/SET_USERS',
	SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT',
	SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
	TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING',
	FOLLOWING_IN_PROGRESS = 'usePrs/FOLLOWING_IN_PROGRESS',
}
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
}

export type FollowSuccessActionType = {
	type: UsersActionType.FOLLOW
	userId: number
}
export type UnfollowSuccessActionType = {
	type: UsersActionType.UNFOLLOW
	userId: number
}
export type SetUsersActionType = {
	type: UsersActionType.SET_USERS
	users: UserType
}
export type SetTotalCountActionType = {
	type: UsersActionType.SET_TOTAL_COUNT
	totalCount: number
}
export type SetCurrentPageActionType = {
	type: UsersActionType.SET_CURRENT_PAGE
	currentPage: number
}
export type ToggleIsFetchingActionType = {
	type: UsersActionType.TOGGLE_IS_FETCHING
	isFetching: boolean
}
export type ToggleFollowingProgressActionType = {
	type: UsersActionType.FOLLOWING_IN_PROGRESS
	isFetching: boolean
	userId: number
}
export type UsersAction =
	| FollowSuccessActionType
	| UnfollowSuccessActionType
	| SetUsersActionType
	| SetTotalCountActionType
	| SetCurrentPageActionType
	| ToggleIsFetchingActionType
	| ToggleFollowingProgressActionType

export type UsersThunkType = ThunkAction<
	Promise<void>,
	RootReducerType,
	unknown,
	UsersAction
>
