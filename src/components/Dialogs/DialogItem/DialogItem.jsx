import { NavLink } from 'react-router-dom'
import dialog from './DialogItem.module.css'
import avatar from './../../../assets/img/avatar.jpg'
const DialogItem = ({ name, id, isActive }) => {
	const path = `/dialogs/${id}`
	return (
		<div className={`${dialog.dialog} ${isActive ? dialog.active : ''}`}>
			<img src={avatar} alt='' />
			<NavLink to={path}>{name}</NavLink>
		</div>
	)
}

export default DialogItem
