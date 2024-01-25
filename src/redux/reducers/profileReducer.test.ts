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
	let action = ProfileActions.addPostActionCreator('New Post')
	let newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(4)
})

test('text of new post should be correct', () => {
	let text = 'u r beautiful'
	let action = ProfileActions.addPostActionCreator(text)
	let newState = profileReducer(state, action)
	expect(newState.posts[0].message).toBe(text)
})
test('after deleting length of posts should be decrement', () => {
	let action = ProfileActions.deletePost(1)
	let newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(2)
})
