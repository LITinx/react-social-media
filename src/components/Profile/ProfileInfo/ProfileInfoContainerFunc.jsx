import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { profileAPI } from '../../../api/api'
import { setUserProfile } from '../../../redux/reducers/profileReducer'
import withRouter from '../../../withRouter/withRouter'
import ProfileInfo from './ProfileInfo'

function ProfileInfoContainer({
	params,
	isAuth,
	userId: id,
	setUserProfile,
	profile,
}) {
	const userId = params['*'] ? params['*'] : id
	useEffect(() => {
		if (id) {
			profileAPI.getUserProfile(userId).then((data) => {
				setUserProfile(data)
			})
		}
	}, [userId, isAuth])

	return <ProfileInfo profile={profile} />
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth,
	userId: state.auth.userId,
})
const mapDispatchToProps = { setUserProfile }

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(withRouter(ProfileInfoContainer))
