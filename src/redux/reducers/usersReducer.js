import { usersAPI } from '../../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

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
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return { ...user, followed: true }
					}
					return user
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return { ...user, followed: false }
					}
					return user
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

export const getUsers = (currentPage, pageSize) => (dispatch) => {
	dispatch(toggleIsFetching(true))

	usersAPI.getUsers(currentPage, pageSize).then((data) => {
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalCount(data.totalCount))
	})
}
export const follow = (userId) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId))
	usersAPI.follow(userId).then((response) => {
		if (response.data.resultCode == 0) {
			dispatch(followSuccess(userId))
			dispatch(toggleFollowingProgress(false, userId))
		}
	})
}
export const unfollow = (userId) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId))
	usersAPI.unfollow(userId).then((response) => {
		if (response.data.resultCode == 0) {
			dispatch(unfollowSuccess(userId))
			dispatch(toggleFollowingProgress(false, userId))
		}
	})
}
export default usersReducer
