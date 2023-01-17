import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
	return <Dialogs {...props} />
}

const mapStateToProps = (state) => ({
	users: state.messagesPage.users,
	messages: state.messagesPage.messages,
})

export default compose(
	connect(mapStateToProps),
	withAuthRedirect,
)(DialogsContainer)
