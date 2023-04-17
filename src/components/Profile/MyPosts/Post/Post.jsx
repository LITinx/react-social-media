import { AiFillLike } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { connect } from 'react-redux'
import { deletePost } from './../../../../redux/reducers/profileReducer'
import post from './Post.module.css'
const Post = ({ children, likes, name = 'Nurik', deletePost, id }) => {
	const onBtnClick = () => {
		deletePost(id)
	}
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
					<MdDeleteOutline size={18} onClick={onBtnClick} />
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

export default connect(null, { deletePost })(Post)
