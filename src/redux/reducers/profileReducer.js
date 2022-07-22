const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE_NEW_POST_VALUE'

const initialState = {
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
}

const profileReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_POST:
			if (!state.newPostValue) return
			return {
				...state,
				newPostValue: '',
				posts: [
					{
						id: Math.max(0, Math.max(...state.posts.map(({ id }) => id))) + 1,
						message: state.newPostValue,
						likesCount: 0,
					},
					...state.posts,
				],
			}
		case UPDATE_NEW_POST_VALUE:
			return { ...state, newPostValue: payload }
		default:
			return state
	}
}
export const addPostActionCreator = () => ({
	type: ADD_POST,
})
export const updateNewPostValueActionCreator = (newValue) => ({
	type: UPDATE_NEW_POST_VALUE,
	payload: newValue,
})

export default profileReducer
