import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'

function App({
	state,
	addPost,
	updateNewPostValue,
	updateNewMessageValue,
	sendMessage,
}) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar state={state.sidebar} />
			<div className='app-content-wrapper'>
				<Routes path='/'>
					<Route
						index
						element={
							<Profile
								profilePage={state.profilePage}
								addPost={addPost}
								updateNewPostValue={updateNewPostValue}
							/>
						}
					/>
					<Route
						path='dialogs/*'
						element={
							<Dialogs
								messagesPage={state.messagesPage}
								updateNewMessageValue={updateNewMessageValue}
								sendMessage={sendMessage}
							/>
						}
					/>
					<Route path='news/' element={<NotFound />} />
					<Route path='music/' element={<NotFound />} />
					<Route path='settings/' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
