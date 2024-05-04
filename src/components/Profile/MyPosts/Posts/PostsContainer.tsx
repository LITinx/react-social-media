import { connect } from 'react-redux'
import { RootState } from '../../../../redux/reduxStore'
import { PostsType } from '../../../../types/profileReducerTypes'
import noLogo from './../../../../assets/img/no-logo.jpg'
import Posts from './Posts'

const mapStateToProps = (state: RootState) => ({
	posts: state.profilePage.posts,
	name: state.profilePage.profile.fullName,
	logo: state.profilePage.profile.photos?.small
		? state.profilePage.profile.photos.small
		: noLogo,
})

type mapStateToPropsType = {
	posts: Array<PostsType>
	name: string
	logo: string
}
export type PostsPropsType = mapStateToPropsType

const PostsContainer = connect<mapStateToPropsType, object, object, RootState>(
	mapStateToProps,
)(Posts)

export default PostsContainer
