import { expect, test } from 'vitest'
import profileReducer, { ProfileActions } from './profileReducer'

const state = {
	profile: {
		aboutMe: '',
		contacts: {
			facebook: '',
			website: '',
			vk: '',
			twitter: '',
			instagram: '',
			youtube: '',
			github: '',
			mainLink: '',
		},
		lookingForAJob: false,
		lookingForAJobDescription: '',
		fullName: 'No name',
		userId: 0,
		photos: {
			small: '',
			large: '',
		},
	},
	posts: [
		{ id: 1, likesCount: 11, message: "It's my first post" },
		{ id: 2, likesCount: 3, message: 'How great weather is' },
		{ id: 3, likesCount: 1, message: 'Wow you are so smart!' },
	],
	status: '',
}

test('length of posts should be incremented`', () => {
	const action = ProfileActions.addPostActionCreator('New Post')
	const newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(4)
})

test('text of new post should be correct', () => {
	const text = 'u r beautiful'
	const action = ProfileActions.addPostActionCreator(text)
	const newState = profileReducer(state, action)
	expect(newState.posts[0].message).toBe(text)
})
test('after deleting length of posts should be decrement', () => {
	const action = ProfileActions.deletePost(1)
	const newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(2)
})
