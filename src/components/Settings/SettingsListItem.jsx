import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import style from './Settings.module.css'

const SettingsListItem = ({ icon, primary, link }) => {
	const path = `settings/${link}`
	const isActiveClass = ({ isActive }) =>
		isActive ? `${style.active} ${style.navLink}` : style.navLink
	return (
		<NavLink to={path} className={isActiveClass}>
			<ListItemButton>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={primary} />
			</ListItemButton>
		</NavLink>
	)
}

export default SettingsListItem
