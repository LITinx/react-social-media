import { TbFaceIdError } from 'react-icons/tb'
const NotFound = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				height: '100%',
			}}
		>
			<h4 style={{ fontSize: '22px', marginBottom: '20px' }}>Page Not Found</h4>
			<TbFaceIdError size='80px' />
		</div>
	)
}

export default NotFound
