import { connect } from 'react-redux'
import Navbar from './Navbar'
import { RootReducerType } from '../../redux/reduxStore'
import { MessagesUserType } from '../../redux/reducers/messagesReducer'
import { FriendsType } from '../../redux/reducers/sidebarReducer'

const mapStateToProps = (state: RootReducerType) => ({
	friends: state.sidebar.friends,
	users: state.messagesPage.users,
	isAuth: state.auth.isAuth,
})

type mapStateToPropsType = {
	isAuth: boolean
	users: Array<MessagesUserType>
	friends: Array<FriendsType>
}
export type NavbarPropsType = mapStateToPropsType
const NavbarContainer = connect<mapStateToPropsType, {}, {}, RootReducerType>(
	mapStateToProps,
)(Navbar)

export default NavbarContainer
