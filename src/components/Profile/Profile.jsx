import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainerFunc'
const Profile = () => {
	return (
		<main className={style.profile}>
			<ProfileInfoContainer />
			<MyPosts />
		</main>
	)
}

export default Profile
