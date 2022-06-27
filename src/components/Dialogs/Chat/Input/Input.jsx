import input from './Input.module.css'

const Input = ({ newMessageValue, updateNewMessageValue, sendMessage }) => {
	const onBtnClick = () => {
		sendMessage()
	}
	const onInpChange = (e) => {
		updateNewMessageValue(e.target.value)
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
