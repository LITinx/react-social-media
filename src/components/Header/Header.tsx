import { Link, NavLink } from 'react-router-dom'
// @ts-ignore
import logo from '../../assets/img/logo.svg'
// @ts-ignore
import header from './Header.module.css'
import { HeaderProps } from './HeaderContainer'

const Header = ({ login, isAuth, userId, authLogout }: HeaderProps) => {
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
							<NavLink to={`/profile/${userId}`} className={header.login}>
								<h2>{login}</h2>
								<p>ID:{userId}</p>
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
