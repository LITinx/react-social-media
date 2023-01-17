// import React from 'react'
// import { connect } from 'react-redux'
// import { profileAPI } from '../../../api/api'
// import { setUserProfile } from '../../../redux/reducers/profileReducer'
// import withRouter from '../../../withRouter/withRouter'
// import ProfileInfo from './ProfileInfo'

// class ProfileInfoContainer extends React.Component {
// 	componentDidMount() {
// 		const userID = this.props.params['*']
// 		if (userID) {
// 			profileAPI.getUserProfile(userID).then((data) => {
// 				this.props.setUserProfile(data)
// 			})
// 		}
// 		if (this.props.isAuth) {
// 			profileAPI.getUserProfile(this.props.userId).then((data) => {
// 				this.props.setUserProfile(data)
// 			})
// 		}
// 	}

// 	render() {
// 		return <ProfileInfo profile={this.props.profile} />
// 	}
// }

// const mapStateToProps = (state) => ({
// 	profile: state.profilePage.profile,
// 	isAuth: state.auth.isAuth,
// 	userId: state.auth.userId,
// })
// const mapDispatchToProps = { setUserProfile }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps,
// )(withRouter(ProfileInfoContainer))
