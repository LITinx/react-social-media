import style from './User.module.css'

const User = ({ id, followed, name, status, follow, photos }) => {
	const stylesForBtn = {
		backgroundColor: followed ? 'var(--red-primary)' : 'var(--blue-secondary)',
		color: followed ? '#000' : 'var(--gray-primary)',
	}
	return (
		<div className={style.wrapper}>
			<div className={style.logo}>
				<img
					className={style.image}
					src={
						photos.small
							? photos.small
							: `https://picsum.photos/200?random=${id}`
					}
					alt='logo'
				/>
				<button
					onClick={() => follow(id)}
					className={style.followBtn}
					style={stylesForBtn}
				>
					{followed ? 'Follow' : 'Unfollow'}
				</button>
			</div>
			<div className={style.info}>
				<div>
					<h4 className={style.fullName}>{name}</h4>
					<p className={style.status}>{status ? status : 'No status'}</p>
				</div>
				{/* <div className={style.location}>
					<h5>
						{location.country} {location.city}
					</h5>
				</div> */}
			</div>
		</div>
	)
}

export default User
