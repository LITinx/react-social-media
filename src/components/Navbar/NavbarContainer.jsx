import { connect } from 'react-redux'
import Navbar from './Navbar'

const mapStateToProps = (state) => ({
	friends: state.sidebar.friends,
	users: state.messagesPage.users,
	isAuth: state.auth.isAuth,
})
const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
