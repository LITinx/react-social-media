const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
	users: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return { ...user, followed: !user.followed }
					}
					return user
				}),
			}
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users],
			}
		default:
			return state
	}
}
export const toggleFollowingAC = (userID) => ({
	type: FOLLOW,
	userID,
})
export const setUsersAC = (users) => ({
	type: SET_USERS,
	users,
})

export default usersReducer
