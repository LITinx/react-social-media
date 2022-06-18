import MyPosts from './MyPosts/MyPosts'
import profile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = ({ posts, setPosts }) => {
	return (
		<main className={profile.profile}>
			<ProfileInfo />
			<MyPosts posts={posts} setPosts={setPosts} />
		</main>
	)
}

export default Profile
