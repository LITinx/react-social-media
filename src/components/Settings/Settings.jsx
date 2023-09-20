import { Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import style from './Settings.module.css'
import GeneralListSection from './SettingsSections/GeneralListSection'
import { NotificationsSection } from './SettingsSections/NotificationsSection'
import { SettingsSideList } from './SettingsSideList'

export const Settings = () => {
	return (
		<div className={style.main}>
			<Typography variant='h5' component='h2'>
				Settings
			</Typography>
			<div className={style.container}>
				<SettingsSideList />
				<div className=''>
					<Routes>
						<Route path='/general' element={<GeneralListSection />} />
						<Route path='/notifications' element={<NotificationsSection />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}
