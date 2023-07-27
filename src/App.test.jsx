import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import MainApp from './App'

describe('App test', () => {
	test('renders without crashing', () => {
		const { container } = render(<MainApp />)
		expect(container.querySelector('.app-wrapper')).toBeDefined()
	})
})
