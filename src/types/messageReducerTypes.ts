import { SEND_MESSAGE, TOGGLE_USER } from '../redux/reducers/messagesReducer'

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

export type MessagesInitialStateType = {
	users: Array<UserType>
}

export type ToggleUserACType = {
	type: typeof TOGGLE_USER
	id: number
}
export type SendMessageActionCreatorType = {
	type: typeof SEND_MESSAGE
	text: string
	id: number
}
