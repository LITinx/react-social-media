import Person from './Person/Person'
import styleFriends from './Friends.module.css'
const Friends = ({ friends }) => {
	const sortedFriends = friends.sort((a, b) => b.bestFriend - a.bestFriend)
	return (
		<div className={styleFriends.wrapper}>
			<h4 className={styleFriends.title}>Friends</h4>
			<div className={styleFriends.flexWrapper}>
				{sortedFriends?.map(({ id, personName, bestFriend }) => (
					<Person key={id} isBestFriend={bestFriend} name={personName} />
				))}
			</div>
		</div>
	)
}

export default Friends
