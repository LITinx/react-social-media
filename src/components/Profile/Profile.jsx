import MyPosts from './MyPosts/MyPosts'
import profile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = () => {
	return (
		<main className={profile.profile}>
			<ProfileInfo />
			<MyPosts />
		</main>
	)
}

export default Profile
