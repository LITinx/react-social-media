import React from 'react'
import { connect } from 'react-redux'
import { authLogout, authMe } from '../../redux/reducers/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authMe()
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	userId: state.auth.userId,
	login: state.auth.login,
	email: state.auth.email,
	isAuth: state.auth.isAuth,
})

const mapDispatchToProps = { authMe, authLogout }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
