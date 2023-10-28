import { Dispatch } from 'redux'
// @ts-ignore
import { usersAPI } from '../../api/api'
import {
	FollowSuccessActionType,
	SetCurrentPageActionType,
	SetTotalCountActionType,
	SetUsersActionType,
	ToggleFollowingProgressActionType,
	ToggleIsFetchingActionType,
	UnfollowSuccessActionType,
	UserType,
	UsersAction,
	UsersActionType,
} from '../../types/usersReducerTypes'
// @ts-ignore
import { updateObjectInArray } from '../../utils/objectHelpers'

const initialState = {
	users: [],
	pageSize: 10,
	totalCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [], // array of users ids
}

const usersReducer = (state = initialState, action: UsersAction) => {
	switch (action.type) {
		case UsersActionType.FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			}
		case UsersActionType.UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: false,
				}),
			}
		case UsersActionType.SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case UsersActionType.SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.totalCount,
			}
		case UsersActionType.SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case UsersActionType.TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case UsersActionType.FOLLOWING_IN_PROGRESS:
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

export const followSuccess = (userId: number): FollowSuccessActionType => ({
	type: UsersActionType.FOLLOW,
	userId,
})
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({
	type: UsersActionType.UNFOLLOW,
	userId,
})
export const setUsers = (users: UserType): SetUsersActionType => ({
	type: UsersActionType.SET_USERS,
	users,
})
export const setTotalCount = (totalCount: number): SetTotalCountActionType => ({
	type: UsersActionType.SET_TOTAL_COUNT,
	totalCount,
})
export const setCurrentPage = (
	currentPage: number,
): SetCurrentPageActionType => ({
	type: UsersActionType.SET_CURRENT_PAGE,
	currentPage,
})
export const toggleIsFetching = (
	isFetching: boolean,
): ToggleIsFetchingActionType => ({
	type: UsersActionType.TOGGLE_IS_FETCHING,
	isFetching,
})
export const toggleFollowingProgress = (
	isFetching: boolean,
	userId: number,
): ToggleFollowingProgressActionType => ({
	type: UsersActionType.FOLLOWING_IN_PROGRESS,
	isFetching,
	userId,
})

export const requestUsers =
	(currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
		dispatch(toggleIsFetching(true))

		const data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalCount(data.totalCount))
	}

const followUnfollow = async (
	dispatch: Dispatch,
	userId: number,
	apiMethod: Function,
	actionCreator: any,
) => {
	dispatch(toggleFollowingProgress(true, userId))
	const response = await apiMethod(userId)
	if (response.data.resultCode == 0) {
		dispatch(actionCreator(userId))
		dispatch(toggleFollowingProgress(false, userId))
	}
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
	const apiMethod = usersAPI.follow.bind(usersAPI)
	const actionCreator = followSuccess
	followUnfollow(dispatch, userId, apiMethod, actionCreator)
}
export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
	const apiMethod = usersAPI.unfollow.bind(usersAPI)
	const actionCreator = unfollowSuccess
	followUnfollow(dispatch, userId, apiMethod, actionCreator)
}
export default usersReducer
