import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { store } from './redux/state'
const root = ReactDOM.createRoot(document.getElementById('root'))
export let renderTree = (store) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={store.getState()} dispatch={store.dispatch.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>,
	)
}

renderTree(store)
store.subscribe(renderTree)
