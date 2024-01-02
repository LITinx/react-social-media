import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
// @ts-ignore
import { usersAPI } from '../../api/usersApi'
import {
	UserType,
	UsersReducerInitialStateType,
} from '../../types/usersReducerTypes'
// @ts-ignore
import { updateObjectInArray } from '../../utils/objectHelpers'
import { ActionsTypes, RootReducerType } from '../reduxStore'

const initialState: UsersReducerInitialStateType = {
	users: [],
	pageSize: 10,
	totalCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [], // array of users ids
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
		default:
			return state
	}
}

type UsersThunkType = ThunkAction<
	Promise<void>,
	RootReducerType,
	unknown,
	UsersAction
>

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
}

export const requestUsers =
	(currentPage: number, pageSize: number): UsersThunkType =>
	async (dispatch: Dispatch<UsersAction>) => {
		dispatch(actions.toggleIsFetching(true))
		const data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(actions.setCurrentPage(currentPage))
		dispatch(actions.toggleIsFetching(false))
		dispatch(actions.setUsers(data.items))
		dispatch(actions.setTotalCount(data.totalCount))
	}

const _followUnfollow = async (
	dispatch: Dispatch<UsersAction>,
	userId: number,
	apiMethod: Function,
	actionCreator: (userId: number) => UsersAction,
) => {
	dispatch(actions.toggleFollowingProgress(true, userId))
	const response = await apiMethod(userId)
	if (response.data.resultCode == 0) {
		dispatch(actionCreator(userId))
		dispatch(actions.toggleFollowingProgress(false, userId))
	}
}

export const follow =
	(userId: number): UsersThunkType =>
	async (dispatch) => {
		const apiMethod = usersAPI.follow.bind(usersAPI)
		const actionCreator = actions.followSuccess
		_followUnfollow(dispatch, userId, apiMethod, actionCreator)
	}
export const unfollow =
	(userId: number): UsersThunkType =>
	async (dispatch: Dispatch<UsersAction>) => {
		const apiMethod = usersAPI.unfollow.bind(usersAPI)
		const actionCreator = actions.unfollowSuccess
		_followUnfollow(dispatch, userId, apiMethod, actionCreator)
	}
export default usersReducer
