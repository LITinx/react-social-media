import message from './Message.module.css'
const Message = ({ children, fromMe }) => {
	return (
		<div
			className={`${message.message} ${
				fromMe ? message.myMessage : message.anotherMessage
			}`}
		>
			<p className={message.messageText}>{children}</p>
		</div>
	)
}

export default Message
