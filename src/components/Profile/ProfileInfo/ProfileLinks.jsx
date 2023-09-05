import styles from './ProfileInfo.module.css'
const ProfileLinks = ({ profile }) => {
	let contacts = []
	for (let url in profile.contacts) {
		profile.contacts[url] ? contacts.push(url) : null
	}
	return (
		<>
			<div>
				<strong>
					About me:{' '}
					<span style={{ fontWeight: '400' }}>
						{profile.aboutMe ? profile.aboutMe : 'No bio'}
					</span>
				</strong>
			</div>
			<div>
				<strong>
					Looking for a job:{' '}
					<span style={{ fontWeight: '400' }}>
						{profile.lookingForAJob ? 'Yes' : 'No'}
					</span>
				</strong>
			</div>
			<div>
				<strong>
					Description for looking a job:{' '}
					<span style={{ fontWeight: '400' }}>
						{profile.lookingForAJobDescription
							? profile.lookingForAJobDescription
							: 'No desc'}
					</span>
				</strong>
			</div>
			<div>
				<h6 style={{ fontSize: '16px' }}>Contacts:</h6>
				<ul>
					{contacts.length
						? contacts.map((contact, index) => {
								return (
									<li className={styles.contacts} key={index}>
										<a target='_blank' href={'//' + profile.contacts[contact]}>
											{contact}
										</a>
									</li>
								)
						  })
						: 'No contacts'}
				</ul>
			</div>
		</>
	)
}

export default ProfileLinks
