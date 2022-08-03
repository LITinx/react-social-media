import User from './User/User'
import React from 'react'
import { createTheme, Pagination, Stack, ThemeProvider } from '@mui/material'

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
	follow,
	getUsers,
	setCurrentPage,
	isFetching
}) => {
	let pageCount = Math.ceil(totalCount / pageSize)
	let pages = []
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}

	const handleClick = (e, value) => {
		setCurrentPage(value)
		getUsers(value, pageSize)
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
						boundaryCount={4}
						page={currentPage}
						onChange={handleClick}
					/>
				</ThemeProvider>
			</Stack>
			{users?.map((user, i) => {
				return <User {...user} follow={follow} isFetching={isFetching} key={i} />
			})}
		</div>
	)
}

export default Users
