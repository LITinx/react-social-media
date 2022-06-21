import { NavLink } from 'react-router-dom'
import dialog from './DialogItem.module.css'
const DialogItem = ({ name, id, isActive, randomID }) => {
	const path = `/dialogs/${id}`

	return (
		<div className={`${dialog.dialog} ${isActive ? dialog.active : ''}`}>
			<img
				src={`https://picsum.photos/200?random=${randomID(1, 200)}`}
				alt=''
			/>
			<NavLink to={path}>{name}</NavLink>
		</div>
	)
}

export default DialogItem
