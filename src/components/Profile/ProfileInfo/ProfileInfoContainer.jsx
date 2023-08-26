import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import withRouter from '../../../hoc/withRouter'
import {
	getUserProfile,
	getUserStatus,
	setPhoto,
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
	setPhoto,
}) {
	const userId = Number(params['*'] ? params['*'] : id)
	const isOwner = id === userId
	useEffect(() => {
		if (id) {
			getUserProfile(userId)
			getUserStatus(userId)
		}
	}, [userId, isAuth])
	return (
		<ProfileInfo
			isOwner={isOwner}
			profile={profile}
			status={status}
			setPhoto={setPhoto}
			updateUserStatus={updateUserStatus}
		/>
	)
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	userId: state.auth.userId,
	status: state.profilePage.status,
})
const mapDispatchToProps = {
	getUserProfile,
	getUserStatus,
	updateUserStatus,
	setPhoto,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect,
)(ProfileInfoContainer)
