import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../../api/api'
import logo from './../../../assets/img/no-logo.jpg'
import style from './User.module.css'

const User = ({
	id,
	followed,
	name,
	status,
	follow,
	unfollow,
	photos,
	followingInProgress,
	toggleFollowingProgress,
}) => {
	const stylesForBtn = {
		backgroundColor: followed ? 'var(--red-primary)' : 'var(--blue-secondary)',
		color: followed ? '#000' : 'var(--gray-primary)',
	}
	return (
		<>
			<div className={style.wrapper}>
				<div className={style.logo}>
					<NavLink
						style={{ textDecoration: 'none', color: '#000' }}
						to={`/profile/${id}`}
					>
						<img
							className={style.image}
							src={photos.small ? photos.small : logo}
							alt='logo'
						/>
					</NavLink>
					{followed ? (
						<button
							disabled={followingInProgress.some((userID) => userID === id)}
							onClick={() => {
								toggleFollowingProgress(true, id)
								usersAPI.unfollow(id).then((response) => {
									if (response.data.resultCode == 0) {
										unfollow(id)
										toggleFollowingProgress(false, id)
									}
								})
							}}
							className={style.followBtn}
							style={stylesForBtn}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some((userID) => userID === id)}
							onClick={() => {
								toggleFollowingProgress(true, id)
								usersAPI.follow(id).then((response) => {
									if (response.data.resultCode == 0) {
										follow(id)
										toggleFollowingProgress(false, id)
									}
								})
							}}
							className={style.followBtn}
							style={stylesForBtn}
						>
							Follow
						</button>
					)}
				</div>
				<div className={style.info}>
					<NavLink
						style={{ textDecoration: 'none', color: '#000' }}
						to={`/profile/${id}`}
					>
						<div>
							<h4 className={style.fullName}>{name}</h4>
							<p className={style.status}>{status ? status : 'No status'}</p>
						</div>
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default User
