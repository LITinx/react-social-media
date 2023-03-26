import { NavLink } from 'react-router-dom'
import dialog from './DialogItem.module.css'
const DialogItem = ({ name, id, isActive, lastMessage }) => {
	const path = `/dialogs/${id}`

	return (
		<div className={`${dialog.dialog} ${isActive ? dialog.active : ''}`}>
			<img
				src={`https://avatars.dzeninfra.ru/get-zen_doc/1704967/pub_600aab7d6f1fa165c1064a87_600aaba1b7c9394d30364e7d/scale_1200`}
				alt=''
			/>
			{/* <img src={`https://picsum.photos/200?random=${id}`} alt='' /> */}
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
