import input from './Input.module.css'
import {connect} from 'react-redux'
import {sendMessageActionCreator, updateNewMessageValueActionCreator,} from '../../../../redux/reducers/messagesReducer'
const Input = ({newMessageValue, onInpChange, onBtnClick}) => {
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
const mapStateToProps = (state) => ({
  newMessageValue: state.messagesPage.newMessageValue,
})

const mapDispatchToProps = (dispatch) => ({
  onBtnClick() {
    dispatch(sendMessageActionCreator())
  },
  onInpChange(text) {
    dispatch(updateNewMessageValueActionCreator(text))
  },
})

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input)

export default InputContainer
