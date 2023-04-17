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

// class UsersContainer extends React.Component {
// 	componentDidMount() {
// 		if (this.props.users.length === 0) {
// 			this.props.requestUsers(this.props.currentPage, this.props.pageSize)
// 		}
// 	}

// 	onPageChanged = (currentPage, pageSize) => {
// 		this.props.requestUsers(currentPage, pageSize)
// 	}

// 	render() {
// 		return <Users {...this.props} onPageChanged={this.onPageChanged} />
// 	}
// }

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
