type MessagesType = {
	id: number
	fromMe: boolean
	message: string
}
type UserType = {
	id: number | null
	active: boolean | null
	name: string | null
	messages: Array<MessagesType>
}

export type messagesInitialStateType = {
	users: Array<UserType>
}
