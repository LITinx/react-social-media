import { ActionsTypes } from '../reduxStore'
import { authMe } from './authReducer'
type InitialStateType = typeof initialState
const initialState = {
	initialized: false,
}

export default (
	state: InitialStateType = initialState,
	action: AppAction,
): InitialStateType => {
	switch (action.type) {
		case 'INITIALIZED_SUCCESS':
			return { ...state, initialized: true }
		default:
			return state
	}
}

type AppAction = ActionsTypes<typeof actions>

const actions = {
	initializedSuccess: () =>
		({
			type: 'INITIALIZED_SUCCESS',
		} as const),
}

export const initializeApp = () => (dispatch: any) => {
	const promise = dispatch(authMe())
	promise.then(() => {
		dispatch(actions.initializedSuccess())
	})
}
