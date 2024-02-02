import { connect } from 'react-redux'
import { MessagesUserType } from '../../redux/reducers/messagesReducer'
import { FriendsType } from '../../redux/reducers/sidebarReducer'
import { RootReducerType } from '../../redux/reduxStore'
import Navbar from './Navbar'

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
const NavbarContainer = connect<
	mapStateToPropsType,
	object,
	object,
	RootReducerType
>(mapStateToProps)(Navbar)

export default NavbarContainer
