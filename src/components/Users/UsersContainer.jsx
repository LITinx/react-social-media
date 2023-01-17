import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { usersAPI } from '../../api/api'
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
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	totalCount: state.usersPage.totalCount,
	currentPage: state.usersPage.currentPage,
	isFetching: state.usersPage.isFetching,
	followingInProgress: state.usersPage.followingInProgress,
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
