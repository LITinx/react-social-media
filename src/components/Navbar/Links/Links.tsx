import { NavLink } from 'react-router-dom'
import { MessagesUserType } from '../../../redux/reducers/messagesReducer'
import style from './Links.module.css'
const Links = ({ users }: { users: Array<MessagesUserType> }) => {
	const activeUserIndex = users?.findIndex((el) => el.active === true)
	const isActiveClass = ({ isActive }: { isActive: boolean }) =>
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
				<NavLink to='/settings/general' className={isActiveClass}>
					Settings
				</NavLink>
			</li>
		</ul>
	)
}

export default Links
