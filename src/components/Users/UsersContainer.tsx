import { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
// @ts-ignore
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {
	follow,
	requestUsers,
	unfollow,
} from '../../redux/reducers/usersReducer'
import { RootReducerType } from '../../redux/reduxStore'
import Users from './Users'
import { UserType } from '../../types/usersReducerTypes'
type MapStateToPropsType = {
	users: Array<UserType>
	pageSize: number
	totalCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
	unfollow: (id: number) => void
	follow: (id: number) => void
	requestUsers: (currentPage: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

function UsersContainer(props: UsersPropsType) {
	useEffect(() => {
		if (props.users.length === 0) {
			props.requestUsers(props.currentPage)
		}
	}, [])

	const onPageChanged = (currentPage: number) => {
		props.requestUsers(currentPage)
	}

	return <Users {...props} onPageChanged={onPageChanged} />
}

const mapStateToProps = (state: RootReducerType) => ({
	users: state.usersPage.users,
	totalCount: state.usersPage.totalCount,
	isFetching: state.usersPage.isFetching,
	followingInProgress: state.usersPage.followingInProgress,
	pageSize: state.usersPage.pageSize,
	currentPage: state.usersPage.currentPage,
})

const mapDispatchToProps: MapDispatchToPropsType = {
	unfollow,
	follow,
	requestUsers,
}

export default compose<React.FunctionComponent>(
	withAuthRedirect,
	connect<MapStateToPropsType, MapDispatchToPropsType, object, RootReducerType>(
		mapStateToProps,
		mapDispatchToProps,
	),
)(UsersContainer)
