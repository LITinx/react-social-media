import { useEffect } from 'react'
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
import { RootReducerType } from '../../../redux/reduxStore'
import { ProfileType } from '../../../types/profileReducerTypes'
import ProfileInfo from './ProfileInfo'

type PropsType = mapStateToPropsType &
	mapDispatchToPropsType & {
		params: {
			'*': number
		}
		isAuth: boolean
	}

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
}: PropsType) {
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
type mapStateToPropsType = {
	profile: ProfileType
	userId: number | null
	status: string
}
type mapDispatchToPropsType = {
	getUserProfile: (userId: number) => void
	getUserStatus: (userId: number) => void
	updateUserStatus: (status: string) => void
	setPhoto: (file: File) => void
}

const mapStateToProps = (state: RootReducerType) => ({
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

export default compose<React.FunctionComponent>(
	connect<mapStateToPropsType, mapDispatchToPropsType, object, RootReducerType>(
		mapStateToProps,
		mapDispatchToProps,
	),
	withRouter,
	withAuthRedirect,
)(ProfileInfoContainer)
