import Post from '../Post/Post'

function Posts({ posts, name, logo }) {
	return (
		<div>
			{posts?.map(({ id, message, likesCount }) => (
				<Post key={id} likes={likesCount} id={id} name={name} logo={logo}>
					{message}
				</Post>
			))}
		</div>
	)
}
export default Posts
