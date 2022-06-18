import Post from '../Post/Post'
import DialogItem from './DialogItem/DialogItem'
import dialog from './Dialogs.module.css'

const Dialogs = ({ messages, users }) => {
	return (
		<div className={dialog.dialogs}>
			<div className={dialog.dialogsItem}>
				{users?.map(({ id, name, active }) => (
					<DialogItem name={name} id={id} key={id} isActive={active} />
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
