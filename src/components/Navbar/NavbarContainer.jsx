import StoreContext from '../../StoreContext'
import Navbar from './Navbar'

const NavbarContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => <Navbar friends={store.getState().sidebar.friends} />}
		</StoreContext.Consumer>
	)
}

export default NavbarContainer
