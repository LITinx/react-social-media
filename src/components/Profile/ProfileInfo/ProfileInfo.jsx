import profile from './ProfileInfo.module.css'
import {useState} from "react";

const ProfileInfo = () => {
	return (
		<>
			<div className={profile.profileImages}>
				<div className={profile.profileBackground}>
					<img src='https://wallpapercave.com/wp/wp2587538.jpg' alt='' />
				</div>
				<div className={profile.profileLogo}>
					<img
						src='https://i.pinimg.com/564x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg'
						alt=''
					/>
				</div>
			</div>
			<div className={profile.profileInfo}>
				<div className={profile.profileName}>Nurik</div>
				<div className={profile.profileDescription}>
					Good Boy Good Boy Good Boy Good Boy Good Boy Good Boy Good Boy Good
					Boy
				</div>
			</div>
		</>
	)
}

export default ProfileInfo
