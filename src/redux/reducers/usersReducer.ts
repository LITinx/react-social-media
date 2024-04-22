import { Dispatch } from 'redux'
import { APIResponseType } from '../../api/api'
import { usersAPI } from '../../api/usersApi'
import {
	UserType,
	UsersReducerInitialStateType,
} from '../../types/usersReducerTypes'
// @ts-ignore
import { updateObjectInArray } from '../../utils/objectHelpers'
import { ActionsTypes, BaseThunkType } from '../reduxStore'

const initialState: UsersReducerInitialStateType = {
	users: [],
	pageSize: 10,
	totalCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [], // array of users ids
	query: '',
	isFriend: undefined,
}

const usersReducer = (state = initialState, action: UsersAction) => {
	switch (action.type) {
		case 'FOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			}
		case 'UNFOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: false,
				}),
			}
		case 'SET_USERS':
			return {
				...state,
				users: action.users,
			}
		case 'SET_TOTAL_COUNT':
			return {
				...state,
				totalCount: action.totalCount,
			}
		case 'SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.currentPage,
			}
		case 'TOGGLE_IS_FETCHING':
			return {
				...state,
				isFetching: action.isFetching,
			}
		case 'FOLLOWING_IN_PROGRESS':
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id != action.userId),
			}
		case 'SET_QUERY':
			return {
				...state,
				query: action.query,
			}
		case 'SET_IS_FRIEND':
			return {
				...state,
				isFriend: action.isFriend,
			}
		default:
			return state
	}
}

type UsersThunkType = BaseThunkType<UsersAction>

export type UsersAction = ActionsTypes<typeof actions>

export const actions = {
	followSuccess: (userId: number) =>
		({
			type: 'FOLLOW',
			userId,
		} as const),
	unfollowSuccess: (userId: number) =>
		({
			type: 'UNFOLLOW',
			userId,
		} as const),
	setUsers: (users: Array<UserType>) =>
		({
			type: 'SET_USERS',
			users,
		} as const),
	setTotalCount: (totalCount: number) =>
		({
			type: 'SET_TOTAL_COUNT',
			totalCount,
		} as const),
	setCurrentPage: (currentPage: number) =>
		({
			type: 'SET_CURRENT_PAGE',
			currentPage,
		} as const),
	toggleIsFetching: (isFetching: boolean) =>
		({
			type: 'TOGGLE_IS_FETCHING',
			isFetching,
		} as const),
	toggleFollowingProgress: (isFetching: boolean, userId: number) =>
		({
			type: 'FOLLOWING_IN_PROGRESS',
			isFetching,
			userId,
		} as const),
	setQuery: (query: string) =>
		({
			type: 'SET_QUERY',
			query,
		} as const),
	setIsFriend: (isFriend: boolean | undefined) =>
		({
			type: 'SET_IS_FRIEND',
			isFriend,
		} as const),
}

export const requestUsers =
	(currentPage: number): UsersThunkType =>
	async (dispatch, getState) => {
		const { pageSize, query, isFriend } = getState().usersPage
		dispatch(actions.toggleIsFetching(true))
		const data = await usersAPI.getUsers(currentPage, pageSize, query, isFriend)
		dispatch(actions.setCurrentPage(currentPage))
		dispatch(actions.setUsers(data.items))
		dispatch(actions.setTotalCount(data.totalCount))
		dispatch(actions.toggleIsFetching(false))
	}

const _followUnfollow = async (
	dispatch: Dispatch<UsersAction>,
	userId: number,
	apiMethod: (id: number) => Promise<APIResponseType>,
	actionCreator: (userId: number) => UsersAction,
) => {
	dispatch(actions.toggleFollowingProgress(true, userId))

	const response = await apiMethod(userId)

	if (response.resultCode === 0) {
		dispatch(actionCreator(userId))
		dispatch(actions.toggleFollowingProgress(false, userId))
	}
}

export const follow =
	(userId: number): UsersThunkType =>
	async (dispatch) => {
		const apiMethod = usersAPI.follow.bind(usersAPI)
		const actionCreator = actions.followSuccess
		await _followUnfollow(dispatch, userId, apiMethod, actionCreator)
	}
export const unfollow =
	(userId: number): UsersThunkType =>
	async (dispatch) => {
		const apiMethod = usersAPI.unfollow.bind(usersAPI)
		const actionCreator = actions.unfollowSuccess
		await _followUnfollow(dispatch, userId, apiMethod, actionCreator)
	}
export default usersReducer
