import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {
	follow,
	getUsers,
	setCurrentPage,
	setTotalCount,
	setUsers,
	toggleIsFetching,
	unfollow,
} from '../../redux/reducers/usersReducer'
import {
	getCurrentPageSelector,
	getFollowingInProgressSelector,
	getIsFetchingSelector,
	getPageSizeSelector,
	getTotalCountSelector,
	getUsersSelector,
} from '../../redux/selectors/usersSelectors'
import Users from './Users'

class UsersContainer extends React.Component {
	componentDidMount() {
		if (this.props.users.length === 0) {
			this.props.getUsers(this.props.currentPage, this.props.pageSize)
		}
	}

	onPageChanged = (currentPage, pageSize) => {
		this.props.getUsers(currentPage, pageSize)
	}

	render() {
		return <Users {...this.props} onPageChanged={this.onPageChanged} />
	}
}

const mapStateToProps = (state) => ({
	users: getUsersSelector(state),
	pageSize: getPageSizeSelector(state),
	totalCount: getTotalCountSelector(state),
	currentPage: getCurrentPageSelector(state),
	isFetching: getIsFetchingSelector(state),
	followingInProgress: getFollowingInProgressSelector(state),
})

const mapDispatchToProps = {
	unfollow,
	follow,
	setUsers,
	setTotalCount,
	setCurrentPage,
	toggleIsFetching,
	getUsers,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)(UsersContainer)
