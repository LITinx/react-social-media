import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import header from './Header.module.css'

const Header = ({ login, isAuth, userId }) => {
	return (
		<header className={header.header}>
			<div className={header.headerWrapper}>
				<Link to='/profile'>
					<img src={logo} alt='logo' />
				</Link>
				<div className={header.avatar}>
					{isAuth ? (
						<NavLink to={`/profile/${userId}`}>
							<img
								src='https://i.pinimg.com/564x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg'
								alt=''
							/>
							<h2>{login}</h2>
						</NavLink>
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
