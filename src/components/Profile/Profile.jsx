import MyPosts from './MyPosts/MyPosts'
import profile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = ({ state }) => {
	return (
		<main className={profile.profile}>
			<ProfileInfo />
			<MyPosts posts={state.posts} />
		</main>
	)
}

export default Profile
