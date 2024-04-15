import { Mocked, beforeEach, describe, expect, test, vi } from 'vitest'
import { APIResponseType } from '../../api/api'
import { usersAPI } from '../../api/usersApi'
import { actions, follow } from './usersReducer'

const dispatchMock = vi.fn()
const getStateMock = vi.fn()
const result: APIResponseType = {
	data: {},
	messages: [''],
	resultCode: 0,
}
vi.mock('../../api/usersApi')

const apiMock = usersAPI as Mocked<typeof usersAPI>
apiMock.follow.mockReturnValue(Promise.resolve(result))

describe('User Reducer Thunk Test', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})
	test('Following to users', async () => {
		const thunk = follow(1)
		await thunk(dispatchMock, getStateMock, {})

		expect(dispatchMock).toHaveBeenCalledTimes(3)
		expect(dispatchMock).toHaveBeenNthCalledWith(
			1,
			actions.toggleFollowingProgress(true, 1),
		)
		expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
		expect(dispatchMock).toHaveBeenNthCalledWith(
			3,
			actions.toggleFollowingProgress(false, 1),
		)
	})
})
