import post from './../MyPosts.module.css'
function PostTextarea({ onValueChange, newPostValue, onBtnClick }) {
	const keyListener = (event) => {
		if (event.keyCode === 13) {
			onBtnClick()
		}
	}
	const handleInput = (e) => {
		onValueChange(e.target.value)
	}
	const onClickBtn = () => {
		onBtnClick()
	}
	return (
		<div className={post.postItems}>
			<div className={post.textArea}>
				<input
					placeholder='New Post...'
					onChange={handleInput}
					value={newPostValue}
					onKeyDown={keyListener}
				/>
			</div>
			<button className={post.button} onClick={onClickBtn}>
				Post
			</button>
		</div>
	)
}
export default PostTextarea
