import Friends from './Friends/Friends'
import Links from './Links/Links'
import nav from './Navbar.module.css'
import { NavbarPropsType } from './NavbarContainer'

const Navbar = ({ friends, users, isAuth }: NavbarPropsType) => {
	return (
		<nav className={nav.nav}>
			<Links users={users} />
			{isAuth && <Friends friends={friends} />}
		</nav>
	)
}

export default Navbar
