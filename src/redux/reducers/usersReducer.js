import { usersAPI } from '../../api/api'
import { updateObjectInArray } from '../../utils/objectHelpers'

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'users/FOLLOWING_IN_PROGRESS'

const initialState = {
	users: [],
	pageSize: 10,
	totalCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userID, 'id', {
					followed: true,
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userID, 'id', {
					followed: false,
				}),
			}
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
			}
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.totalCount,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userID]
					: state.followingInProgress.filter((id) => id != action.userID),
			}
		default:
			return state
	}
}
export const followSuccess = (userID) => ({
	type: FOLLOW,
	userID,
})
export const unfollowSuccess = (userID) => ({
	type: UNFOLLOW,
	userID,
})
export const setUsers = (users) => ({
	type: SET_USERS,
	users,
})
export const setTotalCount = (totalCount) => ({
	type: SET_TOTAL_COUNT,
	totalCount,
})
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})
export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
})
export const toggleFollowingProgress = (isFetching, userID) => ({
	type: FOLLOWING_IN_PROGRESS,
	isFetching,
	userID,
})

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true))

	const data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalCount(data.totalCount))
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId))
	const response = await apiMethod(userId)
	if (response.data.resultCode == 0) {
		dispatch(actionCreator(userId))
		dispatch(toggleFollowingProgress(false, userId))
	}
}

export const follow = (userId) => async (dispatch) => {
	const apiMethod = usersAPI.follow.bind(usersAPI)
	const actionCreator = followSuccess
	followUnfollow(dispatch, userId, apiMethod, actionCreator)
}
export const unfollow = (userId) => async (dispatch) => {
	const apiMethod = usersAPI.unfollow.bind(usersAPI)
	const actionCreator = unfollowSuccess
	followUnfollow(dispatch, userId, apiMethod, actionCreator)
}
export default usersReducer
