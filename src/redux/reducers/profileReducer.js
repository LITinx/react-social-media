import { profileAPI } from '../../api/api'

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/	SET_STATUS'

const initialState = {
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

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			if (!action.postText) return { ...state }
			return {
				...state,
				posts: [
					{
						id: Math.max(0, Math.max(...state.posts.map(({ id }) => id))) + 1,
						message: action.postText,
						likesCount: 0,
					},
					...state.posts,
				],
			}
		case SET_STATUS:
			return { ...state, status: action.status }
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((p) => p.id !== action.postId),
			}
		default:
			return state
	}
}
export const addPostActionCreator = (postText) => ({
	type: ADD_POST,
	postText,
})
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
})
export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
})
export const deletePost = (postId) => ({
	type: DELETE_POST,
	postId,
})
export const getUserProfile = (userId) => async (dispatch) => {
	const data = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(data))
}
export const getUserStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}
export default profileReducer
