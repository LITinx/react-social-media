import {
	sendMessageActionCreator,
	updateNewMessageValueActionCreator,
} from '../../redux/reducers/messagesReducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = ({ store }) => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				const { messages, users, newMessageValue } =
					store.getState().messagesPage
				const onBtnClick = () => {
					store.dispatch(sendMessageActionCreator())
				}
				const onInpChange = (text) => {
					store.dispatch(updateNewMessageValueActionCreator(text))
				}

				return (
					<Dialogs
						users={users}
						newMessageValue={newMessageValue}
						messages={messages}
						onInpChange={onInpChange}
						onBtnClick={onBtnClick}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}

export default DialogsContainer
