export const getUsersSelector = (state) => {
	return state.usersPage.users
}
export const getPageSizeSelector = (state) => {
	return state.usersPage.pageSize
}
export const getTotalCountSelector = (state) => {
	return state.usersPage.totalCount
}
export const getCurrentPageSelector = (state) => {
	return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state) => {
	return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state) => {
	return state.usersPage.followingInProgress
}
