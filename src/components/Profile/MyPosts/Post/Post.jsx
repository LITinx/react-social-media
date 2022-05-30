import post from './Post.module.css'
import { AiFillLike } from 'react-icons/ai'
const Post = ({ message, likes }) => {
	return (
		<div className={post.postWrapper}>
			<div className={post.info}>
				<div className={post.logo}>
					<img
						src='https://i.pinimg.com/564x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg'
						alt=''
					/>
				</div>
				<div className={post.name}>Nurik</div>
			</div>
			<div className={post.post}>
				<p>{message}</p>
				<span>
					{likes}{' '}
					<AiFillLike
						color='#4b484b'
						size={12}
						value={{ className: `${post.reactIcon}` }}
					/>
				</span>
			</div>
		</div>
	)
}

export default Post
