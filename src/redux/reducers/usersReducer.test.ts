import { beforeEach, describe, expect, test } from 'vitest'
import { UsersReducerInitialStateType } from '../../types/usersReducerTypes'
import usersReducer, { actions } from './usersReducer'

let state: UsersReducerInitialStateType

beforeEach(() => {
	state = {
		users: [
			{
				name: 'Daniel',
				id: 0,
				followed: false,
				photos: { large: null, small: null },
				status: 'Hello',
			},
			{
				name: 'Daniel 1',
				id: 1,
				followed: false,
				photos: { large: null, small: null },
				status: 'Hello',
			},
			{
				name: 'Daniel 2',
				id: 2,
				followed: true,
				photos: { large: null, small: null },
				status: 'Hello',
			},
		],
		pageSize: 10,
		totalCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: [], // array of users ids
	}
})
describe('User Reducer Test', () => {
	test('Following to users', () => {
		const newState = usersReducer(state, actions.followSuccess(0))

		expect(newState.users[0].followed).toBeTruthy()
		expect(newState.users[1].followed).toBeFalsy()
	})

	test('Unfollowing to users', () => {
		const newState = usersReducer(state, actions.unfollowSuccess(2))

		expect(newState.users[1].followed).toBeFalsy()
		expect(newState.users[2].followed).toBeFalsy()
	})
})
