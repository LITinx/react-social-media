import { NavLink } from 'react-router-dom'
import style from './Links.module.css'
const Links = ({ users }) => {
	const activeUserIndex = users?.findIndex((el) => el.active === true)
	const isActiveClass = ({ isActive }) =>
		isActive ? `${style.active} ${style.url}` : style.url
	return (
		<ul className={style.listUl}>
			<li className={style.list}>
				<NavLink to='/profile' className={isActiveClass}>
					Profile
				</NavLink>
			</li>
			<li className={style.list}>
				<NavLink to={`/dialogs/${activeUserIndex}`} className={isActiveClass}>
					Messages
				</NavLink>
			</li>
			<li className={style.list}>
				<NavLink to='/users' className={isActiveClass}>
					Users
				</NavLink>
			</li>
			<li className={style.list}>
				<NavLink to='/news' className={isActiveClass}>
					News
				</NavLink>
			</li>
			<li className={style.list}>
				<NavLink to='/music' className={isActiveClass}>
					Music
				</NavLink>
			</li>
			<li className={style.list}>
				<NavLink to='/settings' className={isActiveClass}>
					Settings
				</NavLink>
			</li>
		</ul>
	)
}

export default Links
