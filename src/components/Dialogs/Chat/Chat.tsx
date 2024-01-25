import { MessagesUserType } from '../../../redux/reducers/messagesReducer'
import Message from '../Message/Message'
import chat from './Chat.module.css'
import InputContainer from './Input/Input'

const Chat = ({ users }: { users: Array<MessagesUserType> }) => {
	const activeUserIndex = users?.findIndex((el) => el.active === true)
	return (
		<div className={chat.messagesWrapper}>
			<div className={chat.messagesHeader}>
				<div className={chat.messagesLogo}>
					<img
						src={`https://picsum.photos/200?random=${activeUserIndex}`}
						alt=''
					/>
				</div>
				<div className={chat.messagesName}>{users[activeUserIndex]?.name}</div>
			</div>
			<div className={chat.messages}>
				{users[activeUserIndex].messages?.map(({ message, id, fromMe }) => (
					<Message key={id} fromMe={fromMe}>
						{message}
					</Message>
				))}
			</div>
			<InputContainer />
		</div>
	)
}

export default Chat
