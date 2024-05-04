import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { setProfile } from '../../../redux/reducers/profileReducer'
import { RootState } from '../../../redux/reduxStore'
import { ProfileType } from '../../../types/profileReducerTypes'
import FormInput from '../../FormInput'
import style from '../Settings.module.css'

export type InfoTypeForm = {
	fullName: string
	aboutMe: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
} & ProfileType

type PropsType = mapStateToPropsType & mapDispatchToPropsType
const GeneralListSection = ({ profile, setProfile, userId }: PropsType) => {
	const [open, setOpen] = useState(false)
	const { handleSubmit, register } = useForm<InfoTypeForm>({
		defaultValues: profile,
	})

	const onSubmit: SubmitHandler<InfoTypeForm> = (data) => setProfile(data)

	const toggleButton = () => {
		setOpen(!open)
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
										name={contact as keyof InfoTypeForm}
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

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
	setProfile: (data: ProfileType) => void
}

const mapStateToProps = (state: RootState) => ({
	profile: state.profilePage.profile,
	userId: state.auth.userId,
})

const mapDispatchToProps = { setProfile }

export default connect<
	mapStateToPropsType,
	mapDispatchToPropsType,
	object,
	RootState
>(
	mapStateToProps,
	mapDispatchToProps,
)(GeneralListSection)
