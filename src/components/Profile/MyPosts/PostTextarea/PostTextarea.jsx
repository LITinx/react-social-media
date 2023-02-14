import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import post from './../MyPosts.module.css'

const schema = yup.object().shape({
	postText: yup.string().max(250),
})

function PostTextarea({ onBtnClick }) {
	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	})
	const onSubmit = (data) => {
		onBtnClick(data.postText)
		reset()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={post.postItems}>
			<div className={post.textArea}>
				<textarea placeholder='New Post...' {...register('postText')} />
			</div>
			<button className={post.button} type='submit'>
				Post
			</button>
		</form>
	)
}
export default PostTextarea
