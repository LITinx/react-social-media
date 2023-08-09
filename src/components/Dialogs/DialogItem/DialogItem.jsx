import { NavLink } from 'react-router-dom'
import dialog from './DialogItem.module.css'
const DialogItem = ({ name, id, isActive, lastMessage, toggleUser }) => {
	const path = `/dialogs/${id}`
	const onDialogClick = () => {
		toggleUser(id)
	}
	return (
		<div
			className={`${dialog.dialog} ${isActive ? dialog.active : ''}`}
			onClick={onDialogClick}
		>
			<img src={`https://picsum.photos/200?random=${id}`} alt='' />
			<NavLink to={path}>
				<h4>{name}</h4>
				<div className={dialog.lastTextWrapper}>
					<p>{lastMessage}</p>
				</div>
			</NavLink>
		</div>
	)
}

export default DialogItem
