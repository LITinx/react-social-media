import axios from 'axios'
import { useEffect } from 'react'
import User from './User/User'

const Users = ({ users, follow, setUsers }) => {
	if (users.length === 0) {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then((response) => {
				console.log(response)
				setUsers(response.data.items)
			})
	}
	return (
		<div>
			{users?.map((user, i) => {
				return <User {...user} follow={follow} key={i} />
			})}
		</div>
	)
}

export default Users
