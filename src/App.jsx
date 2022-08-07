import { Route, Routes } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";

function App({ store }) {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavbarContainer />
            <div className='app-content-wrapper'>
                <Routes path='/'>
                    <Route path='profile/*' element={<ProfileContainer />} />
                    <Route path='dialogs/*' element={<DialogsContainer />} />
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
