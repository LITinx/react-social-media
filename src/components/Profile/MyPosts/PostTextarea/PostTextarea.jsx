import post from './../MyPosts.module.css'
function PostTextarea({ onValueChange, newPostValue, onBtnClick }) {
	const keyListener = (event) => {
		if (event.keyCode === 13) {
			onBtnClick()
		}
	}
	return (
		<div className={post.postItems}>
			<div className={post.textArea}>
				<input
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
	)
}
export default PostTextarea
