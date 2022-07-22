import Chat from './Chat/Chat'
import DialogItem from './DialogItem/DialogItem'
import dialog from './Dialogs.module.css'
function Dialogs({ users, messages }) {
	return (
		<div className={dialog.dialogs}>
			<div className={dialog.dialogsItem}>
				{users?.map(({ id, name, active }) => (
					<DialogItem
						name={name}
						id={id}
						key={id}
						isActive={active}
						lastMessage={messages[messages.length - 1].message}
					/>
				))}
			</div>
			<Chat messages={messages} users={users} />
		</div>
	)
}
export default Dialogs
