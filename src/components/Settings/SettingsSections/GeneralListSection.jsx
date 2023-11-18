import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import FormInput from '../../FormInput'
import style from '../Settings.module.css'
import { setProfile } from './../../../redux/reducers/profileReducer'

const GeneralListSection = ({ profile, setProfile, userId }) => {
	const [open, setOpen] = useState(false)
	const { handleSubmit, register } = useForm({ defaultValues: profile })
	const onSubmit = (data) => {
		setProfile(data)
	}
	const toggleButton = () => {
		setOpen((state) => (state = !open))
	}
	return (
		<>
			{userId === profile.userId ? (
				<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
					<Typography variant='h5' component='h4'>
						General
					</Typography>
					<FormInput label='Full name' name='fullName' register={register} />
					<FormInput label='About me' name='aboutMe' register={register} />
					<FormInput
						label='Looking for a job'
						name='lookingForAJob'
						boolean
						defaultValue={profile.lookingForAJob}
						register={register}
					/>
					<FormInput
						label='Job description'
						name='lookingForAJobDescription'
						register={register}
					/>
					<Button
						variant='outlined'
						onClick={toggleButton}
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
					{open && (
						<>
							{Object.keys(profile.contacts).map((contact, index) => {
								return (
									<FormInput
										label={contact}
										name={'contacts.' + contact}
										key={index}
										register={register}
									/>
								)
							})}
						</>
					)}
					<Button
						variant='outlined'
						type='submit'
						sx={{
							color: 'black',
							borderColor: '#c1bcbc',
							'&:hover': {
								border: '1px solid #000',
							},
							'text-align': '',
						}}
					>
						Save
					</Button>
				</form>
			) : (
				<Typography
					variant='h5'
					component={'h3'}
					sx={{
						color: 'red',
						display: 'flex',
						justifyItems: 'center',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<ErrorOutlineIcon sx={{ color: 'red' }} />
					Enter to your account
				</Typography>
			)}
		</>
	)
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	userId: state.auth.userId,
})

const mapDispatchToProps = { setProfile }

export default connect(mapStateToProps, mapDispatchToProps)(GeneralListSection)
