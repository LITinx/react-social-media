import { Dispatch } from 'redux'
// @ts-ignore
import { profileAPI } from '../../api/profileApi'
import {
	AddPostActionCreatorType,
	DeletePostActionType,
	PhotosType,
	ProfileActionType,
	ProfileInitialStateType,
	ProfileType,
	SetStatusActionType,
	SetUserProfileActionType,
} from '../../types/profileReducerTypes'

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
		case ProfileActionType.ADD_POST:
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
		case ProfileActionType.SET_STATUS:
			return { ...state, status: action.payload }
		case ProfileActionType.SET_USER_PROFILE:
			return { ...state, profile: action.payload }
		case ProfileActionType.SAVE_PHOTOS_SUCCESS:
			return { ...state, profile: { ...state.profile, photos: action.payload } }
		case ProfileActionType.DELETE_POST:
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
	type: ProfileActionType.ADD_POST,
	payload: postText,
})

export const setUserProfile = (
	profile: ProfileType,
): SetUserProfileActionType => ({
	type: ProfileActionType.SET_USER_PROFILE,
	payload: profile,
})

export const setStatus = (status: string): SetStatusActionType => ({
	type: ProfileActionType.SET_STATUS,
	payload: status,
})
export const deletePost = (postId: number): DeletePostActionType => ({
	type: ProfileActionType.DELETE_POST,
	payload: postId,
})
export const savePhotoSuccess = (photos: PhotosType) => ({
	type: ProfileActionType.SAVE_PHOTOS_SUCCESS,
	payload: photos,
})
export const getUserProfile =
	(userId: number) => async (dispatch: Dispatch) => {
		const data = await profileAPI.getProfile(userId)

		dispatch(setUserProfile(data))
	}
export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}
export const updateUserStatus =
	(status: string) => async (dispatch: Dispatch) => {
		const response = await profileAPI.updateStatus(status)
		if (response.resultCode === 0) {
			dispatch(setStatus(status))
		}
	}
export const setPhoto = (file: any) => async (dispatch: Dispatch) => {
	const response = await profileAPI.savePhoto(file)

	if (response.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.photos))
	}
}
export const setProfile =
	(data: ProfileType) => async (dispatch: any, getState: any) => {
		const userId = getState().auth.userId
		const response = await profileAPI.saveProfile(data)
		if (response.resultCode === 0) {
			dispatch(getUserProfile(userId))
		}
	}
export default profileReducer
