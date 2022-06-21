import Friends from './Friends/Friends'
import Links from './Links/Links'
import nav from './Navbar.module.css'

const Navbar = ({ state }) => {
	return (
		<nav className={nav.nav}>
			<Links />
			<Friends friends={state.friends} />
		</nav>
	)
}

export default Navbar
