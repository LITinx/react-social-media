import Friends from './Friends/Friends'
import Links from './Links/Links'
import nav from './Navbar.module.css'

const Navbar = ({ friends, users, isAuth }) => {
	return (
		<nav className={nav.nav}>
			<Links users={users} />
			{isAuth && <Friends friends={friends} />}
		</nav>
	)
}

export default Navbar
