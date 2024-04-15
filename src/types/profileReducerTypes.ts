export type PhotosType = {
	small: string | null
	large: string | null
}
export type ContactsType = {
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
export type PostsType = {
	id: number
	message: string
	likesCount: number
}
export type ProfileInitialStateType = {
	profile: ProfileType
	posts: Array<PostsType>
	status: string
}
