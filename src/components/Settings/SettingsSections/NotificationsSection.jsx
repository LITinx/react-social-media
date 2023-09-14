import { Typography } from '@mui/material'
import Switch from '@mui/material/Switch'
import * as React from 'react'
import style from '../Settings.module.css'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export const NotificationsSection = () => {
	return (
		<div className={style.notifications}>
			<Typography variant='h5' component='h4'>
				Notifications
			</Typography>
			<div className=''>
				<p>Reminders: </p>
				<Switch {...label} color='default' />
			</div>
		</div>
	)
}
