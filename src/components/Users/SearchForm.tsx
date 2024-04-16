import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import * as yup from 'yup'
import { searchUsers } from '../../redux/reducers/usersReducer'
import { RootReducerType } from '../../redux/reduxStore'
import style from './Users.module.css'

const schema = yup.object().shape({
	messageText: yup.string().max(150),
})

type SearchFormSubmitType = {
	searchQuery: string
}
type PropsType = {
	pageSize: number
	searchUsers: (query: string, pageSize: number) => void
}
const SearchForm = ({ searchUsers, pageSize }: PropsType) => {
	const { register, handleSubmit } = useForm<SearchFormSubmitType>({
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<SearchFormSubmitType> = (data) => {
		searchUsers(data.searchQuery, pageSize)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<TextField
				type='text'
				variant='standard'
				{...register('searchQuery')}
				placeholder='Type name to find'
			/>
			<Button variant='contained' type='submit' sx={searchButtonStyle}>
				find
			</Button>
		</form>
	)
}

const mapStateToProps = (state: RootReducerType) => ({
	pageSize: state.usersPage.pageSize,
})

const mapDispatchToProps = {
	searchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)

const searchButtonStyle = {
	backgroundColor: 'var(--blue-secondary)',
	color: '#000',
	textTransform: 'capitalize',
	padding: '5px 10px',
	borderRadius: '7px',
	fontSize: '14px',
	marginLeft: '10px',
	'&:hover': {
		backgroundColor: 'var(--blue-primary)',
	},
}
