import { connect } from 'react-redux'
import { ProfileActions } from '../../../../redux/reducers/profileReducer'
import PostTextarea from './PostTextarea'
import { RootReducerType } from '../../../../redux/reduxStore'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
	onBtnClick: ProfileActions.addPostActionCreator,
}
type mapDispatchToPropsType = {
	onBtnClick: (postText: string) => void
}

export default connect<object, mapDispatchToPropsType, object, RootReducerType>(
	mapStateToProps,
	mapDispatchToProps,
)(PostTextarea)
