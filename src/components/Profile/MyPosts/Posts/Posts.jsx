import Post from '../Post/Post'

function Posts({ posts }) {
	return (
		<div>
			{posts?.map(({ id, message, likesCount }) => (
				<Post key={id} likes={likesCount}>
					{message}
				</Post>
			))}
		</div>
	)
}
export default Posts
