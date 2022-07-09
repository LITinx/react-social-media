import input from './Input.module.css'

const Input = ({ newMessageValue, onInpChange, onBtnClick }) => {
	const keyListener = (event) => {
		if (event.keyCode === 13) {
			onBtnClick()
		}
	}
	const handlerInp = (e) => {
		onInpChange(e.target.value)
	}
	const btnClickHandler = () => {
		onBtnClick()
	}
	return (
		<div className={input.wrapper}>
			<input
				type='text'
				placeholder='Your message...'
				value={newMessageValue}
				onChange={handlerInp}
				className={input.input}
				onKeyDown={keyListener}
			/>
			<button className={input.button} onClick={btnClickHandler}>
				Send
			</button>
		</div>
	)
}

export default Input
