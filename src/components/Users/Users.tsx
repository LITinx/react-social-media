import { createTheme, Pagination, Stack, ThemeProvider } from '@mui/material'
import { ChangeEvent } from 'react'
import Preloader from '../Preloader/Preloader'
import User from './User/User'
import { UsersPropsType } from './UsersContainer'

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
type PropsType = UsersPropsType & {
	onPageChanged: (currentPage: number, pageSize: number) => void
}
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
}: PropsType) => {
	let pageCount = Math.ceil(totalCount / pageSize)

	const handleClick = (_e: ChangeEvent<unknown>, page: number) => {
		setCurrentPage(page)
		onPageChanged(page, pageSize)
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
					<Preloader key={i} />
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
