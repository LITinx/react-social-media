import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
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
		.min(4, 'Password must be at least 4 characters')
		.max(20, 'Password must be at most 20 characters')
		.required('This is required field'),
})

const LoginForm = ({ authLogin, isAuth, errorMessage }) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	})
	const onSubmit = (data) => {
		authLogin(data)
		setError('globalError', { type: 'custom', message: errorMessage })
	}
	if (isAuth) {
		return <Navigate to='/profile' />
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
			<input {...register('email')} autoComplete='off' placeholder='Email' />
			{errors.email?.message && <p>{errors.email?.message}</p>}
			<input
				{...register('password')}
				autoComplete='off'
				type='password'
				placeholder='Password'
			/>
			{errors.password?.message && <p>{errors.password?.message}</p>}
			<div className={styles.label}>
				<input {...register('rememberMe')} id='rememberMe' type='checkbox' />
				<label htmlFor='rememberMe'>Remember me</label>
			</div>
			{errors.globalError?.message && <p>{errors.globalError?.message}</p>}
			<button type='submit'>Login</button>
		</form>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	errorMessage: state.auth.errorMessage,
})

export default connect(mapStateToProps, { authLogin })(LoginForm)
