import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import * as yup from 'yup'
import {
	MessagesActions,
	MessagesUserType,
} from '../../../../redux/reducers/messagesReducer'
import { RootReducerType } from '../../../../redux/reduxStore'
import input from './Input.module.css'
const schema = yup.object().shape({
	messageText: yup.string().max(150),
})
type PropsType = mapStateToPropsType & mapDispatchToPropsType
type MessageSubmitType = {
	messageText: string
}
const Input = ({ onBtnClick, users }: PropsType) => {
	const activeUserIndex = users?.findIndex((el) => el.active === true)
	const { register, handleSubmit, reset } = useForm<MessageSubmitType>({
		resolver: yupResolver(schema),
	})
	const btnClickHandler = (data: { messageText: string }) => {
		onBtnClick(data.messageText, activeUserIndex)
		reset()
	}
	const onSubmit: SubmitHandler<MessageSubmitType> = (data) =>
		btnClickHandler(data)
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={input.wrapper}>
			<input
				{...register('messageText')}
				type='text'
				placeholder='Your message...'
				className={input.input}
			/>
			<button type='submit' className={input.button}>
				Send
			</button>
		</form>
	)
}
const mapStateToProps = (state: RootReducerType) => ({
	users: state.messagesPage.users,
})

const mapDispatchToProps = {
	onBtnClick: MessagesActions.sendMessageActionCreator,
}

type mapStateToPropsType = {
	users: Array<MessagesUserType>
}
type mapDispatchToPropsType = {
	onBtnClick: (text: string, id: number) => void
}
const InputContainer = connect<
	mapStateToPropsType,
	mapDispatchToPropsType,
	{},
	RootReducerType
>(
	mapStateToProps,
	mapDispatchToProps,
)(Input)

export default InputContainer
