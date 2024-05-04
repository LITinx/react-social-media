import { connect } from 'react-redux'
import { MessagesUserType } from '../../redux/reducers/messagesReducer'
import { FriendsType } from '../../redux/reducers/sidebarReducer'
import { RootState } from '../../redux/reduxStore'
import Navbar from './Navbar'

const mapStateToProps = (state: RootState) => ({
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
const NavbarContainer = connect<mapStateToPropsType, object, object, RootState>(
	mapStateToProps,
)(Navbar)

export default NavbarContainer
