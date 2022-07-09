import MyPosts from './MyPosts'
import {
	addPostActionCreator,
	updateNewPostValueActionCreator,
} from '../../../redux/reducers/profileReducer'
import StoreContext from '../../../StoreContext'
const MyPostsContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				const { posts, newPostValue } = store.getState().profilePage

				const onBtnClick = (e) => {
					store.dispatch(addPostActionCreator())
				}
				const onValueChange = (e) => {
					store.dispatch(updateNewPostValueActionCreator(e.target.value))
				}
				const keyListener = (event) => {
					if (event.keyCode === 13) {
						onBtnClick()
					}
				}
				return (
					<MyPosts
						onValueChange={onValueChange}
						newPostValue={newPostValue}
						keyListener={keyListener}
						onBtnClick={onBtnClick}
						posts={posts}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer
