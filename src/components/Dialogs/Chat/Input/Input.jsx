import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import * as yup from 'yup'
import { sendMessageActionCreator } from '../../../../redux/reducers/messagesReducer'
import input from './Input.module.css'
const schema = yup.object().shape({
	messageText: yup.string().max(150),
})

const Input = ({ onBtnClick }) => {
	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	})
	const btnClickHandler = (data) => {
		onBtnClick(data.messageText)
		reset()
	}
	return (
		<form onSubmit={handleSubmit(btnClickHandler)} className={input.wrapper}>
			<input
				{...register('messageText')}
				type='text'
				placeholder='Your message...'
				className={input.input}
			/>
			<button
				type='submit
			'
				className={input.button}
			>
				Send
			</button>
		</form>
	)
}
const mapStateToProps = (state) => ({
	newMessageValue: state.messagesPage.newMessageValue,
})

const mapDispatchToProps = {
	onBtnClick: sendMessageActionCreator,
}

const InputContainer = connect(() => ({}), mapDispatchToProps)(Input)

export default InputContainer