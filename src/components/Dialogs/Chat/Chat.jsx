import chat from './Chat.module.css'
import Message from '../Message/Message'
import Input from './Input/Input'
const Chat = ({
	messages,
	users,
	newMessageValue,
	onBtnClick,
	onInpChange,
}) => {
	const activeUserIndex = users.findIndex((el) => el.active === true)

	return (
		<div className={chat.messagesWrapper}>
			<div className={chat.messagesHeader}>
				<div className={chat.messagesLogo}>
					<img
						src={`https://picsum.photos/200?random=${activeUserIndex}`}
						alt=''
					/>
				</div>
				<div className={chat.messagesName}>{users[activeUserIndex].name}</div>
			</div>
			<div className={chat.messages}>
				{messages?.map(({ message, id, fromMe }) => (
					<Message key={id} fromMe={fromMe}>
						{message}
					</Message>
				))}
			</div>
			<Input
				newMessageValue={newMessageValue}
				onInpChange={onInpChange}
				onBtnClick={onBtnClick}
			/>
		</div>
	)
}

export default Chat
