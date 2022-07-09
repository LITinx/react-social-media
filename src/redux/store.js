import messagesReducer from './reducers/messagesReducer'
import profileReducer from './reducers/profileReducer'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE_NEW_MESSAGE_VALUE'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE_NEW_POST_VALUE'
export const store = {
	_callSubscriber() {
		console.log('state changed')
	},
	_state: {
		profilePage: {
			posts: [
				{
					id: 2,
					message: 'Oh, are you serious! 10000 likes😍',
					likesCount: 10134,
				},
				{ id: 1, message: 'Nurel!', likesCount: 15 },
				{ id: 0, message: 'First Post!', likesCount: 20 },
			],
			newPostValue: '',
		},
		messagesPage: {
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
		},
		sidebar: {
			friends: [
				{ id: '234', personName: 'Volkman', bestFriend: true },
				{ id: '235', personName: 'Mirnuy', bestFriend: false },
				{ id: '236', personName: 'Robel', bestFriend: false },
				{ id: '237', personName: 'Eber', bestFriend: true },
				{ id: '238', personName: 'Choro', bestFriend: false },
				{ id: '239', personName: 'Robin', bestFriend: false },
				{ id: '240', personName: 'Hein', bestFriend: true },
				{ id: '241', personName: 'Ken', bestFriend: false },
			],
		},
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},
	getState() {
		return this._state
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
		this._callSubscriber(this)
	},
}
