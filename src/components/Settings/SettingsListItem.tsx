import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Settings.module.css'

type PropsType = {
	icon: ReactNode
	primary: 'General' | 'Notifications'
	link: string
}

const SettingsListItem = ({ icon, primary, link }: PropsType) => {
	const path = `${link}`
	const isActiveClass = ({ isActive }: { isActive: boolean }) =>
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
