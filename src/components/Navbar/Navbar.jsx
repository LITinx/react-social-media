import Friends from './Friends/Friends'
import Links from './Links/Links'
import nav from './Navbar.module.css'

const Navbar = ({ friends }) => {
	return (
		<nav className={nav.nav}>
			<Links />
			<Friends friends={friends} />
		</nav>
	)
}

export default Navbar
