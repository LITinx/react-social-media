const SEND_MESSAGE = 'SEND_MESSAGE'
const TOGGLE_USER = 'TOGGLE_USER'
const initialState = {
	users: [
		{
			id: 0,
			active: false,
			name: 'Heller',
			messages: [
				{ id: 0, fromMe: false, message: 'How are you?' },
				{ id: 1, fromMe: true, message: 'Good, and you?' },
				{ id: 2, fromMe: false, message: "I'm good too" },
				{ id: 3, fromMe: true, message: 'What is your name?' },
				{ id: 4, fromMe: false, message: 'My name is ...' },
				{ id: 5, fromMe: true, message: 'Oh, your name is cool ' },
			],
		},
		{
			id: 1,
			active: false,
			name: 'Larson',
			messages: [
				{ id: 0, fromMe: false, message: 'Hi!' },
				{ id: 1, fromMe: true, message: 'Hello!' },
				{ id: 2, fromMe: false, message: 'What are you doing?' },
				{ id: 3, fromMe: true, message: 'I am doing workout' },
				{ id: 4, fromMe: false, message: 'Wow, that is cool' },
				{ id: 5, fromMe: true, message: 'Thanks!' },
			],
		},
		{
			id: 2,
			active: true,
			name: 'Jenner',
			messages: [
				{ id: 0, fromMe: false, message: 'I love you' },
				{ id: 1, fromMe: true, message: 'That is unbelievable' },
				{ id: 2, fromMe: false, message: 'I really love you ' },
			],
		},
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
		case TOGGLE_USER:
			return {
				...state,
				users: [
					...state.users.map((user) => {
						return { ...user, active: action.id === user.id ? true : false }
					}),
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

export const toggleUserAC = (id) => ({
	type: TOGGLE_USER,
	id,
})

export default messagesReducer
