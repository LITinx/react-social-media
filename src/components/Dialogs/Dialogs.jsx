import DialogItem from './DialogItem/DialogItem'
import dialog from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = ({ state }) => {
	const { messages, users } = state
	const activeUserIndex = users.findIndex((el) => el.active === true)
	// const randomID = (min, max) => {
	// 	return Math.floor(Math.random() * (max - min + 1)) + min
	// }
	return (
		<div className={dialog.dialogs}>
			<div className={dialog.dialogsItem}>
				{users?.map(({ id, name, active }) => (
					<DialogItem name={name} id={id} key={id} isActive={active} />
				))}
			</div>
			<div className={dialog.messagesWrapper}>
				<div className={dialog.messagesHeader}>
					<div className={dialog.messagesLogo}>
						<img
							src='https://i.pinimg.com/564x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg'
							alt=''
						/>
					</div>
					<div className={dialog.messagesName}>
						{users[activeUserIndex].name}
					</div>
				</div>
				<div className={dialog.messages}>
					{messages?.map(({ message, id, fromMe }) => (
						<Message key={id} fromMe={fromMe}>
							{message}
						</Message>
					))}
				</div>
			</div>
		</div>
	)
}

export default Dialogs
