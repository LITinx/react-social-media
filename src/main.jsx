import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const users = [
	{ id: 0, active: false, name: 'Heller' },
	{ id: 1, active: true, name: 'Larson' },
	{ id: 2, active: false, name: 'Ebert' },
	{ id: 3, active: false, name: 'Monahan' },
	{ id: 4, active: false, name: 'Volkman' },
	{ id: 5, active: false, name: 'Hoppe' },
	{ id: 6, active: false, name: 'Robel' },
	{ id: 7, active: false, name: 'Robel' },
	{ id: 8, active: false, name: 'Spinka' },
	{ id: 9, active: false, name: 'Bernhard' },
]

const messages = [
	{ id: 0, message: 'How are you?' },
	{ id: 1, message: 'Good' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'How are you?' },
	{ id: 4, message: 'How are you?' },
]

const posts = [
	{ id: 0, message: 'First Post!', likesCount: 15 },
	{ id: 1, message: 'Nurel!', likesCount: 20 },
]
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App messages={messages} users={users} posts={posts} />
		</BrowserRouter>
	</React.StrictMode>,
)
