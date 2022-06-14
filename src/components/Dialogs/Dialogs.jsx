import Post from '../Post/Post'
import DialogItem from './DialogItem/DialogItem'
import dialog from './Dialogs.module.css'

const Dialogs = () => {
	return (
		<div className={dialog.dialogs}>
			<div className={dialog.dialogsItem}>
				<DialogItem name='Daniel' id='1' isActive />
				<DialogItem name='Islam' id='2' />
				<DialogItem name='Joni' id='3' />
				<DialogItem name='Doni' id='4' />
				<DialogItem name='Poni' id='5' />
			</div>
			<div className={dialog.messages}>
				<Post>How are you?</Post>
				<Post>Nurel krasavchik</Post>
				<Post>How are you?</Post>
				<Post>How are you?</Post>
			</div>
		</div>
	)
}

export default Dialogs
