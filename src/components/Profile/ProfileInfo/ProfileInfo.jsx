import noLogo from '../../../assets/img/no-logo.jpg'
import Preloader from '../../Preloader/Preloader'
import styles from './ProfileInfo.module.css'
import ProfileLinks from './ProfileLinks'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
	if (!profile) return <Preloader variant='profile' />

	return (
		<>
			<div className={styles.profileInfo}>
				<div className={styles.profileLogo}>
					<img
						src={profile.photos?.small ? profile.photos?.small : noLogo}
						alt='logo'
					/>
				</div>
				<div className={styles.profileName}>
					<h6>{profile.fullName}</h6>
				</div>
				<ProfileStatus status={status} updateUserStatus={updateUserStatus} />
				<ProfileLinks profile={profile} />
			</div>
		</>
	)
}

export default ProfileInfo
