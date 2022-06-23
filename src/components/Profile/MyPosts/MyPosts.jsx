import post from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = ({ posts }) => {
	return (
		<div className={post.post}>
			<h2 className={post.postTitle}>My Posts</h2>
			<div className={post.postItems}>
				<div className={post.textArea}>
					<textarea placeholder='New Post...' />
				</div>
				<button className={post.button}>Post</button>
			</div>
			<div className={post.posts}>
				{posts?.map(({ id, message, likesCount }) => (
					<Post key={id} likes={likesCount}>
						{message}
					</Post>
				))}
			</div>
		</div>
	)
}

export default MyPosts
