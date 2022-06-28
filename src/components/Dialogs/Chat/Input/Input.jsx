import input from './Input.module.css'

const Input = ({ newMessageValue, dispatch }) => {
	const onBtnClick = () => {
		dispatch({ type: 'SEND_MESSAGE' })
	}
	const onInpChange = (e) => {
		dispatch({ type: 'UPDATE_NEW_MESSAGE_VALUE', newValue: e.target.value })
	}
	const keyListener = (event) => {
		if (event.keyCode === 13) {
			onBtnClick()
		}
	}
	return (
		<div className={input.wrapper}>
			<input
				type='text'
				placeholder='Your message...'
				value={newMessageValue}
				onChange={onInpChange}
				className={input.input}
				onKeyDown={keyListener}
			/>
			<button className={input.button} onClick={onBtnClick}>
				Send
			</button>
		</div>
	)
}

export default Input
