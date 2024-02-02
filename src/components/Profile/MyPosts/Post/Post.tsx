import { AiFillLike } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { connect } from 'react-redux'
import { ProfileActions } from '../../../../redux/reducers/profileReducer'
import { RootReducerType } from '../../../../redux/reduxStore'
import post from './Post.module.css'

type OwnPropsType = {
	children: string
	likes: number
	id: number
	name: string
	logo: string
}
type PropsType = OwnPropsType & mapDispatchToPropsType
type mapDispatchToPropsType = {
	deletePost: (postId: number) => void
}
const Post = ({
	children,
	likes,
	name = 'No name',
	deletePost,
	id,
	logo,
}: PropsType) => {
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
export default connect<
	object,
	mapDispatchToPropsType,
	OwnPropsType,
	RootReducerType
>(null, {
	deletePost: ProfileActions.deletePost,
})(Post)
