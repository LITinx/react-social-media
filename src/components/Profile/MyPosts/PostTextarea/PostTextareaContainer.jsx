import { connect } from 'react-redux'
import { addPostActionCreator } from '../../../../redux/reducers/profileReducer'
import PostTextarea from './PostTextarea'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
	onBtnClick: addPostActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTextarea)
