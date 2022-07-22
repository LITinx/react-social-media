import Dialogs from './Dialogs'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	users: state.messagesPage.users,
	messages: state.messagesPage.messages,
})

const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer
