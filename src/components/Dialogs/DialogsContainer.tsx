import { FC } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {
	MessagesActions,
	MessagesUserType,
} from '../../redux/reducers/messagesReducer'
import { RootReducerType } from '../../redux/reduxStore'
import Dialogs from './Dialogs'

type mapsStateToPropsType = {
	users: Array<MessagesUserType>
}
type mapDispatchToProps = {
	toggleUser: (id: number) => void
}

export type DialogsPropsType = mapsStateToPropsType & mapDispatchToProps

const DialogsContainer: FC<DialogsPropsType> = (props) => {
	return <Dialogs {...props} />
}

const mapStateToProps = (state: RootReducerType) => ({
	users: state.messagesPage.users,
})

export default compose(
	connect<mapsStateToPropsType, mapDispatchToProps, {}, RootReducerType>(
		mapStateToProps,
		{ toggleUser: MessagesActions.toggleUserAC },
	),
	withAuthRedirect,
)(DialogsContainer)
