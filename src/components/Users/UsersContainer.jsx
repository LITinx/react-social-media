import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { usersAPI } from '../../api/api'
import {
	follow,
	setCurrentPage,
	setTotalCount,
	setUsers,
	toggleFollowingProgress,
	toggleIsFetching,
	unfollow,
} from '../../redux/reducers/usersReducer'
import Users from './Users'

class UsersContainer extends React.Component {
	componentDidMount() {
		if (this.props.users.length === 0) {
			this.props.toggleIsFetching(true)

			usersAPI
				.getUsers(this.props.currentPage, this.props.pageSize)
				.then((data) => {
					this.props.toggleIsFetching(false)
					this.props.setUsers(data.items)
					this.props.setTotalCount(data.totalCount)
				})
		}
	}

	onPageChanged = (currentPage, pageSize) => {
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(currentPage, pageSize).then((data) => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
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
	toggleFollowingProgress,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
