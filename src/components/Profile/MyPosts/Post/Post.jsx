import post from './Post.module.css'
import { AiFillLike } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
const Post = ({ children, likes, name = 'Nurik' }) => {
	return (
		<div className={post.postWrapper}>
			<div className={post.wrapper}>
				<div className={post.info}>
					<div className={post.logo}>
						<img
							src='https://i.pinimg.com/564x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg'
							alt=''
						/>
					</div>
					<div className={post.name}>{name}</div>
				</div>
				<div className={post.icon}>
					<BsThreeDots size={18} />
				</div>
			</div>

			<div className={post.post}>
				<p className={post.like}>{children}</p>
				<span>
					{likes} <AiFillLike color='#4b484b' size={12} />
				</span>
			</div>
		</div>
	)
}

export default Post
