import { NavLink } from 'react-router-dom'
import links from './Links.module.css'
const Links = ({ users }) => {
	const activeUserIndex = users?.findIndex((el) => el.active === true)
	const isActiveClass = ({ isActive }) =>
		isActive ? `${links.active} ${links.url}` : links.url
	return (
		<ul className={links.listUl}>
			<li className={links.list}>
				<NavLink to='/profile' className={isActiveClass}>
					Profile
				</NavLink>
			</li>
			<li className={links.list}>
				<NavLink to={`/dialogs/${activeUserIndex}`} className={isActiveClass}>
					Messages
				</NavLink>
			</li>
			<li className={links.list}>
				<NavLink to='/users' className={isActiveClass}>
					Users
				</NavLink>
			</li>
			<li className={links.list}>
				<NavLink to='/news' className={isActiveClass}>
					News
				</NavLink>
			</li>
			<li className={links.list}>
				<NavLink to='/music' className={isActiveClass}>
					Music
				</NavLink>
			</li>
			<li className={links.list}>
				<NavLink to='/settings' className={isActiveClass}>
					Settings
				</NavLink>
			</li>
		</ul>
	)
}

export default Links
