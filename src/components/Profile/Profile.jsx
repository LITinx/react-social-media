import MyPosts from './MyPosts/MyPosts'
import profile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = ({ profilePage, addPost, updateNewPostValue }) => {
	return (
		<main className={profile.profile}>
			<ProfileInfo />
			<MyPosts
				posts={profilePage.posts}
				newPostValue={profilePage.newPostValue}
				addPost={addPost}
				updateNewPostValue={updateNewPostValue}
			/>
		</main>
	)
}

export default Profile
