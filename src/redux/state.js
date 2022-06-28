export const store = {
	_callSubscriber() {
		console.log('state changed')
	},
	_state: {
		profilePage: {
			posts: [
				{ id: 0, message: 'First Post!', likesCount: 15 },
				{ id: 1, message: 'Nurel!', likesCount: 20 },
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
		switch (action.type) {
			case 'ADD_POST':
				if (!this._state.profilePage.newPostValue) return
				let newPost = {
					id:
						Math.max(
							0,
							Math.max(...this._state.profilePage.posts.map(({ id }) => id)),
						) + 1,
					message: this._state.profilePage.newPostValue,
					likesCount: 0,
				}
				this._state.profilePage.posts.unshift(newPost)
				this._state.profilePage.newPostValue = ''
				this._callSubscriber(this)
				break
			case 'UPDATE_NEW_POST_VALUE':
				this._state.profilePage.newPostValue = action.newValue
				this._callSubscriber(this)
				break
			case 'UPDATE_NEW_MESSAGE_VALUE':
				this._state.messagesPage.newMessageValue = action.newValue
				this._callSubscriber(this)
				break
			case 'SEND_MESSAGE':
				if (!this._state.messagesPage.newMessageValue) return
				let newMessage = {
					id:
						Math.max(
							0,
							Math.max(
								...this._state.messagesPage.messages.map(({ id }) => id),
							),
						) + 1,
					message: this._state.messagesPage.newMessageValue,
					fromMe: true,
				}
				this._state.messagesPage.messages.push(newMessage)
				this._state.messagesPage.newMessageValue = ''
				this._callSubscriber(this)
				break
			default:
				return
		}
	},
	// addPost() {},
	// updateNewPostValue: (newValue) => {
	// 	this._state.profilePage.newPostValue = newValue
	// 	this._callSubscriber(this)
	// },
	// sendMessage() {
	// 	if (!this._state.messagesPage.newMessageValue) return
	// 	let newPost = {
	// 		id:
	// 			Math.max(
	// 				0,
	// 				Math.max(...this._state.messagesPage.messages.map(({ id }) => id)),
	// 			) + 1,
	// 		message: this._state.messagesPage.newMessageValue,
	// 		fromMe: true,
	// 	}
	// 	this._state.messagesPage.messages.push(newPost)
	// 	this._state.messagesPage.newMessageValue = ''
	// 	this._callSubscriber(this)
	// },
	// updateNewMessageValue(newValue) {
	// 	this._state.messagesPage.newMessageValue = newValue
	// 	this._callSubscriber(this)
	// },
}
