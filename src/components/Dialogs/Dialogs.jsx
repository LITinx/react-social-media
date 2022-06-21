import Post from '../Post/Post'
import DialogItem from './DialogItem/DialogItem'
import dialog from './Dialogs.module.css'

const Dialogs = ({ state }) => {
	const { messages, users } = state
	const randomID = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	return (
		<div className={dialog.dialogs}>
			<div className={dialog.dialogsItem}>
				{users?.map(({ id, name, active }) => (
					<DialogItem
						name={name}
						id={id}
						key={id}
						isActive={active}
						randomID={randomID}
					/>
				))}
			</div>
			<div className={dialog.messages}>
				{messages?.map(({ message, id }) => (
					<Post key={id}>{message}</Post>
				))}
			</div>
		</div>
	)
}

export default Dialogs
