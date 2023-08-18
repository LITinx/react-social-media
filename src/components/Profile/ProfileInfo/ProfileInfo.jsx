import { useId } from 'react'
import noLogo from '../../../assets/img/no-logo.jpg'
import Preloader from '../../Preloader/Preloader'
import styles from './ProfileInfo.module.css'
import ProfileLinks from './ProfileLinks'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({
	profile,
	status,
	updateUserStatus,
	isOwner,
	setPhoto,
}) => {
	const inputId = useId()
	if (!profile) return <Preloader variant='profile' />
	const onLogoSelected = (e) => {
		if (e.target.files.length) {
			setPhoto(e.target.files[0])
		}
	}
	return (
		<>
			<div className={styles.profileInfo}>
				<div className={styles.profileLogo}>
					<img
						src={profile.photos?.large ? profile.photos?.large : noLogo}
						alt='logo'
					/>
				</div>
				<div className={styles.profileName}>
					<h6>{profile.fullName}</h6>
				</div>
				{isOwner && (
					<label htmlFor={inputId} className={styles.fileInputLabel}>
						Choose image
						<input
							type='file'
							onChange={onLogoSelected}
							id={inputId}
							className={styles.fileInput}
						/>
					</label>
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
