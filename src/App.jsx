import { useEffect } from 'react'
import { Provider, connect } from 'react-redux'
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import NavbarContainer from './components/Navbar/NavbarContainer'
import NotFound from './components/NotFound/NotFound'
import Preloader from './components/Preloader/Preloader'
import Profile from './components/Profile/Profile'
import ScrollToTop from './components/ScrollToTop'
import UsersContainer from './components/Users/UsersContainer'
import { initializeApp } from './redux/reducers/appReducer'
import store from './redux/reduxStore'

function App({ initializeApp, initialized }) {
	const { pathname } = useLocation()
	useEffect(() => {
		initializeApp()
	}, [])
	if (!initialized) return <Preloader />
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<NavbarContainer />
			<div className='app-content-wrapper'>
				{pathname === '/' && <Navigate to={'/profile'} replace={true} />}
				<ScrollToTop />
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
const AppContainer = connect(
	(state) => ({ initialized: state.app.initialized }),
	{
		initializeApp,
	},
)(App)

const MainApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	)
}

export default MainApp
