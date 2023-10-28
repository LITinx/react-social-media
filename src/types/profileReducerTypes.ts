export enum ProfileActionType {
	ADD_POST = 'profile/ADD_POST',
	DELETE_POST = 'profile/DELETE_POST',
	SET_STATUS = 'profile/SET_STATUS',
	SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
	SAVE_PHOTOS_SUCCESS = 'profile/SAVE_PHOTOS_SUCCESS',
}

export type PhotosType = {
	small: string
	large: string
}
type ContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}

export type ProfileType = {
	aboutMe: string
	contacts: ContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: PhotosType
}
type PostsType = {
	id: number
	message: string
	likesCount: number
}
export type ProfileInitialStateType = {
	profile: ProfileType
	posts: Array<PostsType>
	status: string
}
export type AddPostActionCreatorType = {
	type: ProfileActionType.ADD_POST
	payload: string
}

export type SetUserProfileActionType = {
	type: ProfileActionType.SET_USER_PROFILE
	payload: ProfileType
}
export type SetStatusActionType = {
	type: typeof ProfileActionType.SET_STATUS
	payload: string
}
export type DeletePostActionType = {
	type: typeof ProfileActionType.DELETE_POST
	payload: number
}
export type SavePhotoSuccessActionType = {
	type: typeof ProfileActionType.SAVE_PHOTOS_SUCCESS
	payload: PhotosType
}
