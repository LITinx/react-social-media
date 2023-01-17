import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import withRouter from '../../../hoc/withRouter'
import { getUserProfile } from '../../../redux/reducers/profileReducer'
import ProfileInfo from './ProfileInfo'

function ProfileInfoContainer({
	params,
	isAuth,
	userId: id,
	getUserProfile,
	profile,
}) {
	const userId = params['*'] ? params['*'] : id
	useEffect(() => {
		if (id) {
			getUserProfile(userId)
		}
	}, [userId, isAuth])
	return <ProfileInfo profile={profile} />
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	userId: state.auth.userId,
})
const mapDispatchToProps = { getUserProfile }

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect,
)(ProfileInfoContainer)
