import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { MessagesActions } from '../../redux/reducers/messagesReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
	return <Dialogs {...props} />
}

const mapStateToProps = (state) => ({
	users: state.messagesPage.users,
})

export default compose(
	connect(mapStateToProps, { toggleUser: MessagesActions.toggleUserAC }),
	withAuthRedirect,
)(DialogsContainer)
