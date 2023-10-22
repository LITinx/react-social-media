import {
	InitialStateType,
	InitializedSuccessType,
} from '../../types/appReducerTypes'
// @ts-ignore
import { authMe } from './authReducer'
export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState: InitialStateType = {
	initialized: false,
}

export default (
	state: InitialStateType = initialState,
	{ type }: any,
): InitialStateType => {
	switch (type) {
		case INITIALIZED_SUCCESS:
			return { ...state, initialized: true }
		default:
			return state
	}
}

export const initializedSuccess = (): InitializedSuccessType => ({
	type: INITIALIZED_SUCCESS,
})
export const initializeApp = () => (dispatch: any) => {
	const promise = dispatch(authMe())
	promise.then(() => {
		dispatch(initializedSuccess())
	})
}
