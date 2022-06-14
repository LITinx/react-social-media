import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

function App() {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-content-wrapper'>
				<Routes path='/'>
					<Route index element={<Profile />} />
					<Route path='dialogs/*' element={<Dialogs />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
