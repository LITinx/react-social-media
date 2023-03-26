import { authMe } from './authReducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
const initialState = {
	initialized: false,
}

export default (state = initialState, { type }) => {
	switch (type) {
		case INITIALIZED_SUCCESS:
			return { ...state, initialized: true }
		default:
			return state
	}
}

export const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS,
})
export const initializeApp = () => (dispatch) => {
	const promise = dispatch(authMe())
	promise.then(() => {
		dispatch(initializedSuccess())
	})
}
