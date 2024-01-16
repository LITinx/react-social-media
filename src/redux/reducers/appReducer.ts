import { ActionsTypes, BaseThunkType } from '../reduxStore'
import { authMe } from './authReducer'
type InitialStateType = typeof initialState
const initialState = {
	initialized: false,
}

export default (
	state: InitialStateType = initialState,
	action: AppActionType,
): InitialStateType => {
	switch (action.type) {
		case 'INITIALIZED_SUCCESS':
			return { ...state, initialized: true }
		default:
			return state
	}
}

type AppActionType = ActionsTypes<typeof actions>
type AppThunkType = BaseThunkType<AppActionType, void>

const actions = {
	initializedSuccess: () =>
		({
			type: 'INITIALIZED_SUCCESS',
		} as const),
}

export const initializeApp = (): AppThunkType => (dispatch) => {
	const promise = dispatch(authMe())
	promise.then(() => {
		dispatch(actions.initializedSuccess())
	})
}
