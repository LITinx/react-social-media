// @ts-ignore
import { profileAPI } from '../../api/api'
import {
	AddPostActionCreatorType,
	ProfileInitialStateType,
	ProfileType,
	SetUserProfileActionType,
} from '../../types/profileReducerTypes'

export const ADD_POST = 'profile/ADD_POST'
export const DELETE_POST = 'profile/DELETE_POST'
export const SET_STATUS = 'profile/SET_STATUS'
export const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
export const SAVE_PHOTOS_SUCCESS = 'profile/SAVE_PHOTOS_SUCCESS'
const initialState: ProfileInitialStateType = {
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
	posts: [],
	status: '',
}

const profileReducer = (
	state: ProfileInitialStateType = initialState,
	action: any,
): ProfileInitialStateType => {
	switch (action.type) {
		case ADD_POST:
			if (!action.payload) return { ...state }
			return {
				...state,
				posts: [
					{
						id: Math.max(0, Math.max(...state.posts.map(({ id }) => id))) + 1,
						message: action.payload,
						likesCount: 0,
					},
					...state.posts,
				],
			}
		case SET_STATUS:
			return { ...state, status: action.payload }
		case SET_USER_PROFILE:
			return { ...state, profile: action.payload }
		case SAVE_PHOTOS_SUCCESS:
			return { ...state, profile: { ...state.profile, photos: action.payload } }
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((p) => p.id !== action.payload),
			}
		default:
			return state
	}
}
export const addPostActionCreator = (
	postText: string,
): AddPostActionCreatorType => ({
	type: ADD_POST,
	payload: postText,
})

export const setUserProfile = (
	profile: ProfileType,
): SetUserProfileActionType => ({
	type: SET_USER_PROFILE,
	payload: profile,
})
export type SetStatusActionType = {
	type: typeof SET_STATUS
	payload: string
}
export type DeletePostActionType = {
	type: typeof DELETE_POST
	payload: number
}
export type SavePhotoSuccessActionType = {
	type: typeof SAVE_PHOTOS_SUCCESS
	payload: number
}
export const setStatus = (status: string): SetStatusActionType => ({
	type: SET_STATUS,
	payload: status,
})
export const deletePost = (postId: number): DeletePostActionType => ({
	type: DELETE_POST,
	payload: postId,
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
	console.log(response)

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
