import { expect, test } from 'vitest'
import profileReducer, {
	addPostActionCreator,
	deletePost,
} from './profileReducer'

const state = {
	profile: {
		aboutMe: null,
		contacts: {
			facebook: null,
			website: null,
			vk: null,
			twitter: null,
			instagram: null,
			youtube: null,
			github: null,
			mainLink: null,
		},
		lookingForAJob: false,
		lookingForAJobDescription: null,
		fullName: 'No name',
		userId: 0,
		photos: {
			small: null,
			large: null,
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
	let action = addPostActionCreator('New Post')
	let newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(4)
})

test('text of new post should be correct', () => {
	let text = 'u r beautiful'
	let action = addPostActionCreator(text)
	let newState = profileReducer(state, action)
	expect(newState.posts[0].message).toBe(text)
})
test('after deleting length of posts should be decrement', () => {
	let action = deletePost(1)
	let newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(2)
})
