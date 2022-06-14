import post from './MyPosts.module.css'
import Post from './../../Post/Post'
const MyPosts = () => {
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
				<Post likes={15} isLike>
					First Post!
				</Post>
				<Post likes={20} isLike>
					Nurel!
				</Post>
			</div>
		</div>
	)
}

export default MyPosts
