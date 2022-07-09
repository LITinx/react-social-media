import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './redux/reduxStore'
import { Provider } from './StoreContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
export let renderTree = (store) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>,
	)
}

renderTree(store)
store.subscribe(() => renderTree(store))
