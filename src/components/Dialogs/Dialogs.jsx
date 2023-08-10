import Chat from './Chat/Chat'
import DialogItem from './DialogItem/DialogItem'
import dialog from './Dialogs.module.css'

function Dialogs({ users, toggleUser }) {
	return (
		<div className={dialog.dialogs}>
			<div className={dialog.dialogsItem}>
				{users?.map(({ id, name, active }) => {
					return (
						<DialogItem
							name={name}
							id={id}
							key={id + name}
							isActive={active}
							toggleUser={toggleUser}
							lastMessage={
								users[id].messages[users[id].messages.length - 1].message
							}
						/>
					)
				})}
			</div>
			<Chat users={users} />
		</div>
	)
}
export default Dialogs
