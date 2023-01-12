import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import HeaderContainer from './components/Header/HeaderContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import ScrollToTop from './components/ScrollToTop'
import UsersContainer from './components/Users/UsersContainer'

function App() {
	const { pathname } = useLocation()

	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<NavbarContainer />
			<div className='app-content-wrapper'>
				<ScrollToTop />
				{pathname === '/' && <Navigate to={'/profile'} replace={true} />}
				<Routes path='/'>
					<Route path='profile/*' element={<Profile />} />
					<Route path='dialogs/:userid' element={<DialogsContainer />} />
					<Route path='users/' element={<UsersContainer />} />
					<Route path='news/' element={<NotFound />} />
					<Route path='music/' element={<NotFound />} />
					<Route path='settings/' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
