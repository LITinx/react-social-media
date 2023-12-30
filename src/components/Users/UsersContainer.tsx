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
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalCount,
	getUsers, // @ts-ignore
} from '../../redux/selectors/usersSelectors'
import { UsersReducerInitialStateType } from '../../types/usersReducerTypes'
// @ts-ignore
import Users from './Users'

type MapStateToPropsType = UsersReducerInitialStateType
type MapDispatchToPropsType = {
	unfollow: (id: number) => void
	follow: (id: number) => void
	requestUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

function UsersContainer(props: UsersPropsType) {
	useEffect(() => {
		if (props.users.length === 0) {
			props.requestUsers(props.currentPage, props.pageSize)
		}
	}, [])

	const onPageChanged = (currentPage: number, pageSize: number) => {
		props.requestUsers(currentPage, pageSize)
	}

	return <Users {...props} onPageChanged={onPageChanged} />
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
	users: getUsers(state),
	pageSize: getPageSize(state),
	totalCount: getTotalCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state),
})

const mapDispatchToProps: MapDispatchToPropsType = {
	unfollow,
	follow,
	requestUsers,
}

export default compose(
	withAuthRedirect,
	connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReducerType>(
		mapStateToProps,
		mapDispatchToProps,
	),
)(UsersContainer)
