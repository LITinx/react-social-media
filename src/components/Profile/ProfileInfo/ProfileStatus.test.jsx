import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus test', () => {
	const status = 'hello i am cool'
	test('status from props should be in the state', () => {
		const { getByText } = render(<ProfileStatus status={status} />)
		expect(getByText(status)).toBeDefined()
	})
	test('after render span should be displayed', () => {
		const { container } = render(<ProfileStatus status={status} />)
		expect(container.querySelector('span')).toBeTruthy()
	})
	test('after render input should not be displayed', () => {
		const { container, debug } = render(<ProfileStatus status={status} />)
		expect(container.querySelector('input')).toBeNull()
	})
	test('after render span should contain correct status', () => {
		const { container } = render(<ProfileStatus status={status} />)
		expect(container.querySelector('span').innerHTML).toBe(status)
	})
})
