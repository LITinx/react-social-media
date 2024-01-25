import Post from '../Post/Post'
import { PostsPropsType } from './PostsContainer'

function Posts({ posts, name, logo }: PostsPropsType) {
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
