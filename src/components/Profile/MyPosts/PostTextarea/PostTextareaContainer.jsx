import {
  addPostActionCreator, updateNewPostValueActionCreator,
} from '../../../../redux/reducers/profileReducer'
import {connect} from 'react-redux'
import PostTextarea from './PostTextarea'


const mapStateToProps = (state) => {
  return {newPostValue: state.profilePage.newPostValue}
}

const mapDispatchToProps = {
  onBtnClick: addPostActionCreator,
  onValueChange: updateNewPostValueActionCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(PostTextarea)
