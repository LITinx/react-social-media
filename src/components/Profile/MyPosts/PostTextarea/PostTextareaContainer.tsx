import { connect } from 'react-redux'
import { ProfileActions } from '../../../../redux/reducers/profileReducer'
import { RootState } from '../../../../redux/reduxStore'
import PostTextarea from './PostTextarea'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
	onBtnClick: ProfileActions.addPostActionCreator,
}
type mapDispatchToPropsType = {
	onBtnClick: (postText: string) => void
}

export default connect<object, mapDispatchToPropsType, object, RootState>(
	mapStateToProps,
	mapDispatchToProps,
)(PostTextarea)
