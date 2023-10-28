import {
	AppActionType,
	InitialStateType,
	InitializedSuccessType,
} from '../../types/appReducerTypes'
import { authMe } from './authReducer'

const initialState: InitialStateType = {
	initialized: false,
}

export default (
	state: InitialStateType = initialState,
	action: { type: AppActionType.INITIALIZED_SUCCESS },
): InitialStateType => {
	switch (action.type) {
		case AppActionType.INITIALIZED_SUCCESS:
			return { ...state, initialized: true }
		default:
			return state
	}
}

export const initializedSuccess = (): InitializedSuccessType => ({
	type: AppActionType.INITIALIZED_SUCCESS,
})
export const initializeApp = () => (dispatch: any) => {
	const promise = dispatch(authMe())
	promise.then(() => {
		dispatch(initializedSuccess())
	})
}
