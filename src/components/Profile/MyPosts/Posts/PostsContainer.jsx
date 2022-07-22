import Posts from './Posts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	posts: state.profilePage.posts,
})
const PostsContainer = connect(mapStateToProps)(Posts)

export default PostsContainer
