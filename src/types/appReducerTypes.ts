export enum AppActionType {
	INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS',
}

export type InitialStateType = {
	initialized: boolean
}
export type InitializedSuccessType = {
	type: AppActionType.INITIALIZED_SUCCESS
}
