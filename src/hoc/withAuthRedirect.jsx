import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

function withAuthRedirect(Component) {
	function RedirectComponent(props) {
		if (!props.isAuth) {
			return <Navigate to='/login' />
		}

		return <Component {...props} />
	}

	return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect
