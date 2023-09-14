import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import List from '@mui/material/List'
import SettingsListItem from './SettingsListItem'

export function SettingsSideList() {
	return (
		<List
			sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
			component='nav'
			aria-labelledby='nested-list-subheader'
		>
			<SettingsListItem
				icon={<SettingsIcon />}
				primary='General'
				link='general'
			/>
			<SettingsListItem
				icon={<NotificationsIcon />}
				primary='Notifications'
				link='notifications'
			/>
		</List>
	)
}
