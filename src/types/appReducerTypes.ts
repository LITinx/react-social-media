import { INITIALIZED_SUCCESS } from '../redux/reducers/appReducer'

export type InitialStateType = {
	initialized: boolean
}
export type InitializedSuccessType = {
	type: typeof INITIALIZED_SUCCESS
}
