import { connect } from 'react-redux'
import noLogo from './../../../../assets/img/no-logo.jpg'
import Posts from './Posts'

const mapStateToProps = (state) => ({
	posts: state.profilePage.posts,
	name: state.profilePage.profile.fullName,
	logo: state.profilePage.profile.photos?.small
		? state.profilePage.profile.photos.small
		: noLogo,
})
const PostsContainer = connect(mapStateToProps)(Posts)

export default PostsContainer
