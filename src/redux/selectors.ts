import { UsersReducerInitialStateType } from '../types/usersReducerTypes'
import { RootState } from './reduxStore'

export const usersPage = (key: keyof UsersReducerInitialStateType) => {
	return (state: RootState) => state.usersPage[key]
}
