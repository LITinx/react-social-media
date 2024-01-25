import post from './MyPosts.module.css'
import PostTextareaContainer from './PostTextarea/PostTextareaContainer'
import PostsContainer from './Posts/PostsContainer'
function MyPosts() {
	return (
		<div className={post.post}>
			<h2 className={post.postTitle}>My Posts</h2>
			<PostTextareaContainer />
			<PostsContainer />
		</div>
	)
}

export default MyPosts
