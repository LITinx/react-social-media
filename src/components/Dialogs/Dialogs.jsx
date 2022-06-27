import Chat from './Chat/Chat'
import DialogItem from './DialogItem/DialogItem'
import dialog from './Dialogs.module.css'

const Dialogs = ({ messagesPage, updateNewMessageValue, sendMessage }) => {
	const { messages, users, newMessageValue } = messagesPage
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
			<Chat
				newMessageValue={newMessageValue}
				messages={messages}
				users={users}
				updateNewMessageValue={updateNewMessageValue}
				sendMessage={sendMessage}
			/>
		</div>
	)
}

export default Dialogs
