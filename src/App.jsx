import { connect } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import NavbarContainer from './components/Navbar/NavbarContainer'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import ScrollToTop from './components/ScrollToTop'
import UsersContainer from './components/Users/UsersContainer'

function App({ isAuth }) {
	const { pathname } = useLocation()

	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<NavbarContainer />
			<div className='app-content-wrapper'>
				<ScrollToTop />
				{pathname === '/' && <Navigate to={'/profile'} replace={true} />}
				{pathname === '/login' && isAuth && (
					<Navigate to={'/profile'} replace={true} />
				)}
				<Routes path='/'>
					<Route path='profile/*' element={<Profile />} />
					<Route path='dialogs/:id' element={<DialogsContainer />} />
					<Route path='users/' element={<UsersContainer />} />
					<Route path='news/' element={<NotFound />} />
					<Route path='music/' element={<NotFound />} />
					<Route path='settings/' element={<NotFound />} />
					<Route path='login/' element={<Login />} />
				</Routes>
			</div>
		</div>
	)
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps)(App)
