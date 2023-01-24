import { profileAPI } from '../../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE_NEW_POST_VALUE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
	newPostValue: '',
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
	posts: [],
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
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
			return { ...state, newPostValue: action.newValue }
		case SET_STATUS:
			return { ...state, status: action.status }
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		default:
			return state
	}
}
export const addPostActionCreator = () => ({
	type: ADD_POST,
})
export const updateNewPostValueActionCreator = (newValue) => ({
	type: UPDATE_NEW_POST_VALUE,
	newValue,
})
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
})
export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
})

export const getUserProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId).then((data) => {
		dispatch(setUserProfile(data))
	})
}
export const getUserStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then((response) => {
		dispatch(setStatus(response.data))
	})
}
export const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}
export default profileReducer
