import {
	addPostActionCreator,
	updateNewPostValueActionCreator,
} from '../../../../redux/reducers/profileReducer'
import { connect } from 'react-redux'
import PostTextarea from './PostTextarea'

const mapStateToProps = (state) => ({
	newPostValue: state.profilePage.newPostValue,
})

const mapDispatchToProps = (dispatch) => ({
	onBtnClick() {
		dispatch(addPostActionCreator())
	},
	onValueChange(e) {
		dispatch(updateNewPostValueActionCreator(e.target.value))
	},
})
const PostTextareaContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PostTextarea)

export default PostTextareaContainer
