import { createTheme, Pagination, Stack, ThemeProvider } from '@mui/material'
import React from 'react'
import Preloader from '../Preloader/Preloader'
import User from './User/User'

const theme = createTheme({
	components: {
		MuiPagination: {
			styleOverrides: {
				ul: {
					'& .Mui-selected': {
						backgroundColor: 'var(--blue-secondary)',
						color: '#fff',
					},
					'& .Mui-selected:hover': {
						backgroundColor: 'var(--blue-primary)',
					},
				},
			},
		},
	},
})

const Users = ({
	totalCount,
	pageSize,
	currentPage,
	users,
	unfollow,
	follow,
	onPageChanged,
	setCurrentPage,
	isFetching,
	followingInProgress,
}) => {
	let pageCount = Math.ceil(totalCount / pageSize)
	let pages = []
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}

	const handleClick = (e, value) => {
		setCurrentPage(value)
		onPageChanged(value, pageSize)
	}

	return (
		<div>
			<Stack
				direction='row'
				justifyContent='center'
				alignItems='center'
				style={{ marginTop: '20px' }}
			>
				<ThemeProvider theme={theme}>
					<Pagination
						count={pageCount}
						boundaryCount={2}
						siblingCount={4}
						page={currentPage}
						onChange={handleClick}
					/>
				</ThemeProvider>
			</Stack>
			{users?.map((user, i) => {
				return isFetching ? (
					<Preloader />
				) : (
					<User
						{...user}
						follow={follow}
						followingInProgress={followingInProgress}
						unfollow={unfollow}
						key={i}
					/>
				)
			})}
		</div>
	)
}

export default Users
