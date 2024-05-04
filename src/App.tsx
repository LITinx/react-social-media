import { Suspense, lazy, useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import NavbarContainer from './components/Navbar/NavbarContainer'
import NotFound from './components/NotFound/NotFound'
import Preloader from './components/Preloader/Preloader'
import ScrollToTop from './components/ScrollToTop'
import { Settings } from './components/Settings/Settings'
import { initializeApp } from './redux/reducers/appReducer'
import { RootState } from './redux/reduxStore'

const Profile = lazy(() => import('./components/Profile/Profile'))
const DialogsContainer = lazy(
	() => import('./components/Dialogs/DialogsContainer'),
)
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

type PropsType = mapStateToPropsType & mapDispatchToPropsType
function App({ initializeApp, initialized }: PropsType) {
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
				<Suspense fallback={<Preloader />}>
					<Routes>
						<Route path='profile/*' element={<Profile />} />
						<Route path='dialogs/:id' element={<DialogsContainer />} />
						<Route path='users/' element={<UsersContainer />} />
						<Route path='settings/*' element={<Settings />} />
						<Route path='login/' element={<Login />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	)
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: RootState) => ({
	initialized: state.app.initialized,
})

type mapDispatchToPropsType = {
	initializeApp: () => void
}

export default connect<
	mapStateToPropsType,
	mapDispatchToPropsType,
	object,
	RootState
>(mapStateToProps, {
	initializeApp,
})(App)
