import MyPostsContainer from './MyPosts/MyPostContainers'
import profile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = ({ store }) => {
	return (
		<main className={profile.profile}>
			<ProfileInfo />
			<MyPostsContainer store={store} />
		</main>
	)
}

export default Profile
