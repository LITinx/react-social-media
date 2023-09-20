import { profileAPI } from '../../api/api'

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SAVE_PHOTOS_SUCCESS = 'profile/SAVE_PHOTOS_SUCCESS'
const initialState = {
	profile: {
		aboutMe: '',
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
		lookingForAJobDescription: '',
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
		case SAVE_PHOTOS_SUCCESS:
			return { ...state, profile: { ...state.profile, photos: action.photos } }
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
export const savePhotoSuccess = (photos) => ({
	type: SAVE_PHOTOS_SUCCESS,
	photos,
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
export const setPhoto = (file) => async (dispatch) => {
	const response = await profileAPI.savePhoto(file)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}
export const setProfile = (data) => async (dispatch, getState) => {
	const userId = getState().auth.userId
	const response = await profileAPI.saveProfile(data)
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId))
	}
}
export default profileReducer
