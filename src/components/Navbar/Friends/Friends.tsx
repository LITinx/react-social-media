import { FriendsType } from '../../../redux/reducers/sidebarReducer'
import style from './Friends.module.css'
import Person from './Person/Person'
const Friends = ({ friends }: { friends: Array<FriendsType> }) => {
	const sortedFriends = friends.sort((a, b) => +b.bestFriend - +a.bestFriend)

	friends
	return (
		<div className={style.wrapper}>
			<h4 className={style.title}>
				{friends.length < 1 ? 'No Friends' : 'Friends'}
			</h4>
			<div className={style.flexWrapper}>
				{sortedFriends?.map(({ id, personName, bestFriend }) => (
					<Person
						key={id}
						isBestFriend={bestFriend}
						id={id}
						name={personName}
					/>
				))}
			</div>
		</div>
	)
}

export default Friends
