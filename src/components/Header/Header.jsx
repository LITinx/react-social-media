import header from './Header.module.css';
import logo from '../../assets/img/logo.svg';

const Header = () => {
	return (
		<header className={header.header}>
			<div className={header.headerWrapper}>
				<img src={logo} alt='logo' />
				<div className={header.avatar}>
					<img
						src='https://i.pinimg.com/564x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg'
						alt=''
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
