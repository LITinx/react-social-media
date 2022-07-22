import Navbar from './Navbar'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		friends: state.sidebar.friends,
	}
}
const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
