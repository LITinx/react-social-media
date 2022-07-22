import { connect } from 'react-redux'
import {
	setUsersAC,
	toggleFollowingAC,
} from '../../redux/reducers/usersReducer'
import Users from './Users'

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
})

const mapDispatchToProps = (dispatch) => ({
	follow(userID) {
		dispatch(toggleFollowingAC(userID))
	},
	setUsers(users) {
		dispatch(setUsersAC(users))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
