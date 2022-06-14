import { NavLink } from 'react-router-dom'
import nav from './Navbar.module.css'

const Navbar = () => {
	const isActiveClass = ({ isActive }) => (isActive ? nav.active : '')
	return (
		<nav className={nav.nav}>
			<ul>
				<li>
					<NavLink to='/' className={isActiveClass}>
						Profile
					</NavLink>
				</li>
				<li>
					<NavLink to='/dialogs/' className={isActiveClass}>
						Messages
					</NavLink>
				</li>
				<li>
					<a href='#'>News</a>
				</li>
				<li>
					<a href='#'>Music</a>
				</li>
				<li>
					<a href='#'>Settings</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
