import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {
	follow,
	requestUsers,
	setCurrentPage,
	setTotalCount,
	setUsers,
	toggleIsFetching,
	unfollow,
} from '../../redux/reducers/usersReducer'
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalCount,
	getUsers,
} from '../../redux/selectors/usersSelectors'
import Users from './Users'

function UsersContainer(props) {
	useEffect(() => {
		if (props.users.length === 0) {
			props.requestUsers(props.currentPage, props.pageSize)
		}
	}, [])

	const onPageChanged = (currentPage, pageSize) => {
		props.requestUsers(currentPage, pageSize)
	}

	return <Users {...props} onPageChanged={onPageChanged} />
}

const mapStateToProps = (state) => ({
	users: getUsers(state),
	pageSize: getPageSize(state),
	totalCount: getTotalCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state),
})

const mapDispatchToProps = {
	unfollow,
	follow,
	setUsers,
	setTotalCount,
	setCurrentPage,
	toggleIsFetching,
	requestUsers,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)(UsersContainer)
