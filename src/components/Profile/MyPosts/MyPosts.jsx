import post from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = ({ posts, newPostValue, dispatch }) => {
	const onBtnClick = (e) => {
		dispatch({ type: 'ADD_POST' })
	}
	const onValueChange = (e) => {
		dispatch({ type: 'UPDATE_NEW_POST_VALUE', newValue: e.target.value })
	}
	const keyListener = (event) => {
		if (event.keyCode === 13) {
			onBtnClick()
		}
	}
	return (
		<div className={post.post}>
			<h2 className={post.postTitle}>My Posts</h2>
			<div className={post.postItems}>
				<div className={post.textArea}>
					<textarea
						placeholder='New Post...'
						onChange={onValueChange}
						value={newPostValue}
						onKeyDown={keyListener}
					/>
				</div>
				<button className={post.button} onClick={onBtnClick}>
					Post
				</button>
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
