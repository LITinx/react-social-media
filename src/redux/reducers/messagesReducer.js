const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE_NEW_MESSAGE_VALUE'
const initialState = {
	users: [
		{ id: 0, active: false, name: 'Heller' },
		{ id: 1, active: false, name: 'Larson' },
		{ id: 2, active: true, name: 'Ebert' },
		{ id: 3, active: false, name: 'Monahan' },
		{ id: 4, active: false, name: 'Volkman' },
		{ id: 5, active: false, name: 'Hoppe' },
		{ id: 6, active: false, name: 'Robel' },
		{ id: 8, active: false, name: 'Spinka' },
		{ id: 9, active: false, name: 'Bernhard' },
	],
	messages: [
		{ id: 0, fromMe: false, message: 'How are you?' },
		{ id: 1, fromMe: true, message: 'Good, and you?' },
		{ id: 2, fromMe: false, message: "I'm good too" },
		{ id: 3, fromMe: true, message: 'What is your name?' },
		{ id: 4, fromMe: false, message: 'My name is ...' },
		{ id: 5, fromMe: true, message: 'Oh, your name is cool ' },
	],
	newMessageValue: '',
}
const messagesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case UPDATE_NEW_MESSAGE_VALUE:
			state.newMessageValue = payload
			return state
		case SEND_MESSAGE:
			if (!state.newMessageValue) return
			let newMessage = {
				id: Math.max(0, Math.max(...state.messages.map(({ id }) => id))) + 1,
				message: state.newMessageValue,
				fromMe: true,
			}
			state.messages.push(newMessage)
			state.newMessageValue = ''
			return state
		default:
			return state
	}
}
export const sendMessageActionCreator = () => ({
	type: SEND_MESSAGE,
})
export const updateNewMessageValueActionCreator = (newValue) => ({
	type: UPDATE_NEW_MESSAGE_VALUE,
	payload: newValue,
})
export default messagesReducer
