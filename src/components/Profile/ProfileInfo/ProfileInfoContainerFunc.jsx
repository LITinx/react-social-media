import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import withRouter from '../../../hoc/withRouter'
import {
	getUserProfile,
	getUserStatus,
	updateUserStatus,
} from '../../../redux/reducers/profileReducer'
import ProfileInfo from './ProfileInfo'

function ProfileInfoContainer({
	params,
	isAuth,
	userId: id,
	getUserProfile,
	profile,
	getUserStatus,
	status,
	updateUserStatus,
}) {
	const userId = params['*'] ? params['*'] : id
	useEffect(() => {
		if (id) {
			getUserProfile(userId)
			getUserStatus(userId)
		}
	}, [userId, isAuth])
	return (
		<ProfileInfo
			profile={profile}
			status={status}
			updateUserStatus={updateUserStatus}
		/>
	)
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	userId: state.auth.userId,
	status: state.profilePage.status,
})
const mapDispatchToProps = { getUserProfile, getUserStatus, updateUserStatus }

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect,
)(ProfileInfoContainer)
