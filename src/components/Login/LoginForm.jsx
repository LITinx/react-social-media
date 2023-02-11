import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { authLogin } from '../../redux/reducers/authReducer'
import styles from './Login.module.css'
const schema = yup.object().shape({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('This is required field'),
	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.max(16, 'Password must be at most 16 characters')
		.required('This is required field'),
})

const LoginForm = ({ authLogin }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	})
	const navigate = useNavigate()
	const onSubmit = (data) => {
		console.log(data, errors)
		authLogin(data)
		navigate('/profile')
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
			<input {...register('email')} autoComplete='off' placeholder='Email' />
			{errors.email?.message && <p>{errors.email?.message}</p>}
			<input
				{...register('password')}
				autoComplete='off'
				placeholder='Password'
			/>
			{errors.password?.message && <p>{errors.password?.message}</p>}
			<div className={styles.label}>
				<input {...register('rememberMe')} id='rememberMe' type='checkbox' />
				<label htmlFor='rememberMe'>Remember me</label>
			</div>
			<button type='submit'>Login</button>
		</form>
	)
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { authLogin })(LoginForm)
