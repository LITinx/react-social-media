import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './redux/reduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
)
// BrowserRouter basename={import.meta.env.BASE_URL}
