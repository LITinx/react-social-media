import Friends from './Friends/Friends'
import Links from './Links/Links'
import nav from './Navbar.module.css'

const Navbar = ({ friends, users }) => {
	return (
		<nav className={nav.nav}>
			<Links users={users} />
			<Friends friends={friends} />
		</nav>
	)
}

export default Navbar
