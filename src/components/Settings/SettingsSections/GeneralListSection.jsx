import { Button, TextField, Typography } from '@mui/material'
import style from '../Settings.module.css'

const GeneralListSection = () => {
	return (
		<form className={style.form}>
			<Typography variant='h5' component='h4'>
				General
			</Typography>
			<TextField
				id='outlined-basic'
				label='About me'
				variant='outlined'
				size='small'
			/>
			<TextField
				id='outlined-basic'
				label='Looking for a job'
				variant='outlined'
				size='small'
			/>
			<TextField
				id='outlined-basic'
				label='Job description'
				variant='outlined'
				size='small'
			/>
			<Button
				variant='outlined'
				sx={{
					color: 'black',
					borderColor: '#c1bcbc',
					'&:hover': {
						border: '1px solid #000',
					},
					'text-align': '',
				}}
			>
				Contacts
			</Button>
		</form>
	)
}

export default GeneralListSection
