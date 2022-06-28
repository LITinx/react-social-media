import MyPosts from './MyPosts/MyPosts'
import profile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = ({ profilePage, dispatch }) => {
	return (
		<main className={profile.profile}>
			<ProfileInfo />
			<MyPosts
				posts={profilePage.posts}
				newPostValue={profilePage.newPostValue}
				dispatch={dispatch}
			/>
		</main>
	)
}

export default Profile
