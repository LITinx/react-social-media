import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import header from './Header.module.css'

const Header = ({ login, isAuth, userId, authLogout }) => {
	const logout = () => {
		authLogout()
	}
	return (
		<header className={header.header}>
			<div className={header.headerWrapper}>
				<Link to='/profile'>
					<img src={logo} alt='logo' />
				</Link>
				<div className={header.avatar}>
					{isAuth ? (
						<>
							<NavLink to={`/profile/${userId}`}>
								<h2>{login}</h2>
							</NavLink>
							<button onClick={logout}>Logout</button>
						</>
					) : (
						<NavLink to='/login'>
							<h2>Login</h2>
						</NavLink>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
