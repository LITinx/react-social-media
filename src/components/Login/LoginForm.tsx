import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import * as yup from 'yup'
import { AuthLoginDataType, authLogin } from '../../redux/reducers/authReducer'
import { RootState } from '../../redux/reduxStore'
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

type FormValuesType = {
	password: string
	email: string
	rememberMe: boolean
	captcha: string
	globalError: string
}

type MapStateToPropsType = {
	isAuth: boolean
	captchaUrl: string | null
	errorMessage: string
}
type MapDispatchToPropsType = {
	authLogin: (data: AuthLoginDataType) => void
}
type LoginFormType = MapStateToPropsType & MapDispatchToPropsType
const LoginForm = ({
	authLogin,
	isAuth,
	errorMessage,
	captchaUrl,
}: LoginFormType) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FormValuesType>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	})
	const onSubmit = (data: AuthLoginDataType) => {
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
			{captchaUrl && (
				<>
					<img src={captchaUrl} />
					<input {...register('captcha')} />
				</>
			)}
			{errors.globalError?.message && <p>{errors.globalError?.message}</p>}
			<button type='submit'>Login</button>
		</form>
	)
}

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
	errorMessage: state.auth.errorMessage,
})

export default connect(mapStateToProps, { authLogin })(LoginForm)
