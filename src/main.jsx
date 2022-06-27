import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import {
	addPost,
	sendMessage,
	updateNewMessageValue,
	updateNewPostValue,
	state,
	subscribe,
} from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))
export let renderTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addPost={addPost}
					updateNewPostValue={updateNewPostValue}
					sendMessage={sendMessage}
					updateNewMessageValue={updateNewMessageValue}
				/>
			</BrowserRouter>
		</React.StrictMode>,
	)
}

renderTree(state)
subscribe(renderTree)
