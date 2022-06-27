import { AiFillStar } from 'react-icons/ai'
import person from './Person.module.css'
const Person = ({ name, isBestFriend, id }) => {
	const friendChecker = {
		color: `${isBestFriend ? '#178b17' : '#000'}`,
	}

	return (
		<div className={person.wrapper}>
			<img
				className={person.image}
				src={`https://picsum.photos/200?random=${id}`}
				alt='logo'
			/>
			<div
				className={person.info}
				style={{
					marginLeft: `${isBestFriend ? '-10px' : '0px'}`,
				}}
			>
				{isBestFriend && <AiFillStar size='10px' color='#178b17' />}
				<h6 style={friendChecker}>{name}</h6>
			</div>
		</div>
	)
}

export default Person
