import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainerFunc'
const Profile = ({ profile }) => {
	return (
		<main className={style.profile}>
			<ProfileInfoContainer />
			<MyPosts />
		</main>
	)
}

export default Profile
