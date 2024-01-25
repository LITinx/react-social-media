import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import post from './../MyPosts.module.css'

const schema = yup.object().shape({
	postText: yup.string().max(250),
})

type PropsType = {
	onBtnClick: (postText: string) => void
}
type FieldValuesType = {
	postText: string
}
function PostTextarea({ onBtnClick }: PropsType) {
	const { register, handleSubmit, reset } = useForm<FieldValuesType>({
		resolver: yupResolver(schema),
	})
	const onSubmit: SubmitHandler<FieldValuesType> = (data) => {
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
