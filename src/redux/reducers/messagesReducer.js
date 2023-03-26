const SEND_MESSAGE = 'SEND_MESSAGE'
const initialState = {
	users: [
		{ id: 0, active: false, name: 'Heller' },
		{ id: 1, active: false, name: 'Larson' },
		{ id: 2, active: true, name: 'Jenner' },
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
}
const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			if (!action.text) return
			return {
				...state,
				messages: [
					...state.messages,
					{
						id:
							Math.max(0, Math.max(...state.messages.map(({ id }) => id))) + 1,
						message: action.text,
						fromMe: true,
					},
				],
			}
		default:
			return state
	}
}
export const sendMessageActionCreator = (text) => ({
	type: SEND_MESSAGE,
	text,
})

export default messagesReducer
