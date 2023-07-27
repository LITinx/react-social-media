import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus test', () => {
	test('status from props should be in the state', () => {
		const { container } = render(<ProfileStatus />)
		console.log(container)
		expect(container.querySelector('.app-wrapper')).toBeDefined()
	})
})
