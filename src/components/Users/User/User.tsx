import { NavLink } from 'react-router-dom'
// @ts-ignore
import logo from './../../../assets/img/no-logo.jpg'
// @ts-ignore
import style from './User.module.css'

type PropsType = {
	id: number
	followed: boolean
	name: string
	status: string
	follow: (id: number) => void
	unfollow: (id: number) => void
	photos: { small: string | null; large: string | null }
	followingInProgress: Array<number>
}

const User = ({
	id,
	followed,
	name,
	status,
	follow,
	unfollow,
	photos,
	followingInProgress,
}: PropsType) => {
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
								unfollow(id)
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
								follow(id)
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
							<div className={style.statusWrapper}>
								<p className={style.status}>{status ? status : 'No status'}</p>
							</div>
						</div>
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default User
