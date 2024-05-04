import React from 'react'
import { connect } from 'react-redux'
import { authLogout } from '../../redux/reducers/authReducer'
import { RootState } from '../../redux/reduxStore'
import Header from './Header'
type MapStateToPropsType = {
	login: string | null
	isAuth: boolean | null
	userId: number | null
}
type MapDispatchToPropsType = {
	authLogout: () => void
}
export type HeaderProps = MapStateToPropsType & MapDispatchToPropsType
class HeaderContainer extends React.Component<HeaderProps, object> {
	render() {
		return (
			<Header
				isAuth={this.props.isAuth}
				userId={this.props.userId}
				authLogout={this.props.authLogout}
				login={this.props.login}
			/>
		)
	}
}

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
	userId: state.auth.userId,
	login: state.auth.login,
	isAuth: state.auth.isAuth,
})

const mapDispatchToProps: MapDispatchToPropsType = { authLogout }

export default connect<
	MapStateToPropsType,
	MapDispatchToPropsType,
	object,
	RootState
>(
	mapStateToProps,
	mapDispatchToProps,
)(HeaderContainer)
