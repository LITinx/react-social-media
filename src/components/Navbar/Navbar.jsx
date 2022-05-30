import nav from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={nav.nav}>
			<ul>
				<li>
					<a href='#' className={nav.active}>
						Profile
					</a>
				</li>
				<li>
					<a href='#'>News</a>
				</li>
				<li>
					<a href='#'>Music</a>
				</li>
				<li>
					<a href='#'>Messages</a>
				</li>
				<li>
					<a href='#'>Settings</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
