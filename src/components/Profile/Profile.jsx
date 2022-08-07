import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = ({ profile }) => {

	return (
		<main className={style.profile}>
			<ProfileInfo profile={profile}/>
			<MyPosts />
		</main>
	)
}

export default Profile
