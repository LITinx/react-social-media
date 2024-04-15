import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, test } from 'vitest'
import App from './App'
import store from './redux/reduxStore'

describe('App test', () => {
	test('renders without crashing', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>,
		)
		expect(getByText('Loading...')).toBeDefined()
	})
})
