import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material'
import { useDebounce } from '@uidotdev/usehooks'
import { ChangeEvent, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import * as yup from 'yup'
import { actions, requestUsers } from '../../redux/reducers/usersReducer'
import { RootReducerType } from '../../redux/reduxStore'
import style from './Users.module.css'

const schema = yup.object().shape({
	messageText: yup.string().max(150),
})

type SearchFormSubmitType = {
	searchQuery: string
	radioOptions: string
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType
const radioOptionBoolean = (option: string) => {
	if (option === 'allUsers') return undefined
	return option === 'followed' ? true : false
}

const SearchForm = ({
	setQuery,
	currentPage,
	requestUsers,
	setIsFriend,
}: PropsType) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [isSearching, setIsSearching] = useState(false)
	const { register, handleSubmit, getValues } = useForm<SearchFormSubmitType>({
		resolver: yupResolver(schema),
	})
	const debouncedSearchTerm = useDebounce(searchQuery, 500)

	const handleChange = (e: ChangeEvent<{ value: string }>) => {
		setSearchQuery(e.target.value)
	}

	const onSubmit: SubmitHandler<SearchFormSubmitType> = (data) => {
		setQuery(data.searchQuery)
		setIsFriend(radioOptionBoolean(data.radioOptions))
		requestUsers(currentPage)
	}

	useEffect(() => {
		const debouncedSearch = async () => {
			setIsSearching(true)
			if (debouncedSearchTerm) {
				setQuery(debouncedSearchTerm)
				setIsFriend(radioOptionBoolean(getValues('radioOptions')))
				await requestUsers(currentPage)
			}
			setIsSearching(false)
		}
		debouncedSearch()
	}, [debouncedSearchTerm])

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<TextField
				value={searchQuery}
				type='text'
				variant='standard'
				{...register('searchQuery')}
				placeholder='Type name to find'
				onChange={handleChange}
				autoComplete='off'
			/>
			<Button
				variant='contained'
				disabled={isSearching}
				type='submit'
				sx={searchButtonStyle}
			>
				{isSearching ? '...' : 'Search'}
			</Button>
			<FormControl>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue='allUsers'
					name='radio-buttons-group'
					row
				>
					<FormControlLabel
						value='allUsers'
						control={<Radio sx={checkedRadio} />}
						label='All users'
						{...register('radioOptions')}
					/>
					<FormControlLabel
						value='notFollowed'
						control={<Radio sx={checkedRadio} />}
						label='Not Followed'
						{...register('radioOptions')}
					/>
					<FormControlLabel
						value='followed'
						control={<Radio sx={checkedRadio} />}
						label='Followed'
						{...register('radioOptions')}
					/>
				</RadioGroup>
			</FormControl>
		</form>
	)
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
	setQuery: (query: string) => void
	requestUsers: (currentPage: number) => void
	setIsFriend: (isFriend: boolean | undefined) => void
}
const mapStateToProps = (state: RootReducerType) => ({
	currentPage: state.usersPage.currentPage,
})

const mapDispatchToProps = {
	setQuery: actions.setQuery,
	setIsFriend: actions.setIsFriend,
	requestUsers,
}

export default connect<
	mapStateToPropsType,
	mapDispatchToPropsType,
	object,
	RootReducerType
>(
	mapStateToProps,
	mapDispatchToProps,
)(SearchForm)

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
const checkedRadio = {
	'&.Mui-checked': {
		color: 'var(--blue-primary)',
	},
}
