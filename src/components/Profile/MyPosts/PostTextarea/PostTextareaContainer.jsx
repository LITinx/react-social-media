import { connect } from 'react-redux'
import { ProfileActions } from '../../../../redux/reducers/profileReducer'
import PostTextarea from './PostTextarea'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
	onBtnClick: ProfileActions.addPostActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTextarea)
