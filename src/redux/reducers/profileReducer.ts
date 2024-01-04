import { profileAPI } from '../../api/profileApi'
import {
	PhotosType,
	ProfileInitialStateType,
	ProfileType,
} from '../../types/profileReducerTypes'
import { ActionsTypes, BaseThunkType } from '../reduxStore'

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
	action: ProfileAction,
): ProfileInitialStateType => {
	switch (action.type) {
		case 'ADD_POST':
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
		case 'SET_STATUS':
			return { ...state, status: action.payload }
		case 'SET_USER_PROFILE':
			return { ...state, profile: action.payload }
		case 'SAVE_PHOTOS_SUCCESS':
			return { ...state, profile: { ...state.profile, photos: action.payload } }
		case 'DELETE_POST':
			return {
				...state,
				posts: state.posts.filter((p) => p.id !== action.payload),
			}
		default:
			return state
	}
}

export type ProfileAction = ActionsTypes<typeof ProfileActions>
type ProfileThunkType = BaseThunkType<ProfileAction>

export const ProfileActions = {
	addPostActionCreator: (postText: string) =>
		({
			type: 'ADD_POST',
			payload: postText,
		} as const),

	setUserProfile: (profile: ProfileType) =>
		({
			type: 'SET_USER_PROFILE',
			payload: profile,
		} as const),

	setStatus: (status: string) =>
		({
			type: 'SET_STATUS',
			payload: status,
		} as const),
	deletePost: (postId: number) =>
		({
			type: 'DELETE_POST',
			payload: postId,
		} as const),
	savePhotoSuccess: (photos: PhotosType) =>
		({
			type: 'SAVE_PHOTOS_SUCCESS',
			payload: photos,
		} as const),
}

export const getUserProfile =
	(userId: number): ProfileThunkType =>
	async (dispatch) => {
		const data = await profileAPI.getProfile(userId)

		dispatch(ProfileActions.setUserProfile(data))
	}
export const getUserStatus =
	(userId: number): ProfileThunkType =>
	async (dispatch) => {
		const response = await profileAPI.getStatus(userId)
		dispatch(ProfileActions.setStatus(response.data))
	}
export const updateUserStatus =
	(status: string): ProfileThunkType =>
	async (dispatch) => {
		const response = await profileAPI.updateStatus(status)
		if (response.resultCode === 0) {
			dispatch(ProfileActions.setStatus(status))
		}
	}
export const setPhoto =
	(file: any): ProfileThunkType =>
	async (dispatch) => {
		const response = await profileAPI.savePhoto(file)

		if (response.resultCode === 0) {
			dispatch(ProfileActions.savePhotoSuccess(response.data.photos))
		}
	}
export const setProfile =
	(data: ProfileType): ProfileThunkType =>
	async (dispatch, getState) => {
		const userId = getState().auth.userId
		const response = await profileAPI.saveProfile(data)
		if (response.resultCode === 0 && userId != null) {
			dispatch(getUserProfile(userId))
		}
	}
export default profileReducer
