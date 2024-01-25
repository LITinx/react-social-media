import message from './Message.module.css'
type PropsType = {
	children: string
	fromMe: boolean
}
const Message = ({ children, fromMe }: PropsType) => {
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
