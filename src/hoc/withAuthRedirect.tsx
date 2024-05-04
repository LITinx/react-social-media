import { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../redux/reduxStore'

const mapStateToProps = (state: RootState) => ({
	isAuth: state.auth.isAuth,
})
type PropsType = { isAuth: boolean }

function withAuthRedirect<WCP extends object>(Component: ComponentType<WCP>) {
	const RedirectComponent: FC<PropsType> = (props) => {
		if (!props.isAuth) {
			return <Navigate to='/login' />
		}

		return <Component {...(props as WCP & PropsType)} />
	}

	return connect<PropsType, object, WCP, RootState>(
		mapStateToProps,
		{},
	)(RedirectComponent)
}

export default withAuthRedirect
