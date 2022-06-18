import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

function App({ messages, users, posts }) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-content-wrapper'>
				<Routes path='/'>
					<Route index element={<Profile posts={posts} />} />
					<Route
						path='dialogs/*'
						element={<Dialogs messages={messages} users={users} />}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default App
