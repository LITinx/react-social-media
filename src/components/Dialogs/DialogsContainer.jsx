import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { toggleUserAC } from '../../redux/reducers/messagesReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
	return <Dialogs {...props} />
}

const mapStateToProps = (state) => ({
	users: state.messagesPage.users,
	messages: state.messagesPage.messages,
})

export default compose(
	connect(mapStateToProps, { toggleUser: toggleUserAC }),
	withAuthRedirect,
)(DialogsContainer)
