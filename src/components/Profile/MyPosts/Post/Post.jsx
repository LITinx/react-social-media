import { AiFillLike } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { connect } from 'react-redux'
import { ProfileActions } from '../../../../redux/reducers/profileReducer'
import post from './Post.module.css'

const Post = ({ children, likes, name = 'No name', deletePost, id, logo }) => {
	const onBtnClick = () => {
		deletePost(id)
	}
	return (
		<div className={post.postWrapper}>
			<div className={post.wrapper}>
				<div className={post.info}>
					<div className={post.logo}>
						<img src={logo} alt='' />
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
export default connect(null, { deletePost: ProfileActions.deletePost })(Post)
