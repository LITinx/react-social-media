import { useId } from 'react'
import noLogo from '../../../assets/img/no-logo.jpg'
import { ProfileType } from '../../../types/profileReducerTypes'
import Preloader from '../../Preloader/Preloader'
import styles from './ProfileInfo.module.css'
import ProfileLinks from './ProfileLinks'
import ProfileStatus from './ProfileStatus'

type PropsType = {
	profile: ProfileType
	status: string
	updateUserStatus: (status: string) => void
	isOwner: boolean
	setPhoto: (file: File) => void
}

const ProfileInfo = ({
	profile,
	status,
	updateUserStatus,
	isOwner,
	setPhoto,
}: PropsType) => {
	const inputId = useId()
	if (!profile) return <Preloader variant='profile' />
	const onLogoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			setPhoto(e.target.files[0])
		}
	}
	return (
		<>
			<div className={styles.profileInfo}>
				<div className={styles.profileMain}>
					<div className={styles.profileLogo}>
						<label
							htmlFor={inputId}
							className={styles.fileInputLabel}
							style={{
								cursor: isOwner ? 'pointer' : 'auto',
							}}
						>
							<img
								src={profile.photos?.large ? profile.photos?.large : noLogo}
								alt='logo'
							/>
						</label>
					</div>
					<div className={styles.profileName}>
						<h6>{profile.fullName}</h6>
					</div>
				</div>
				{isOwner && (
					<input
						type='file'
						onChange={onLogoSelected}
						id={inputId}
						className={styles.fileInput}
					/>
				)}
				{isOwner ? (
					<ProfileStatus status={status} updateUserStatus={updateUserStatus} />
				) : (
					<div className={styles.statusText}>
						<span>{status || 'No status'}</span>
					</div>
				)}
				<ProfileLinks profile={profile} />
			</div>
		</>
	)
}

export default ProfileInfo
