import ContentLoader from 'react-content-loader'

type PropsType = {
	variant?: 'profile'
}
const Preloader = ({ variant }: PropsType) => {
	if (variant === 'profile') {
		return (
			<ContentLoader
				speed={2}
				width={400}
				height={400}
				viewBox='0 0 400 400'
				backgroundColor='#f3f3f3'
				foregroundColor='#ecebeb'
			>
				<rect x='0' y='0' rx='0' ry='0' width='370' height='160' />
				<rect x='0' y='63' rx='0' ry='0' width='72' height='4' />
				<rect x='0' y='180' rx='0' ry='0' width='200' height='15' />
				<rect x='0' y='200' rx='0' ry='0' width='200' height='15' />
				<rect x='0' y='220' rx='0' ry='0' width='200' height='15' />
				<circle cx='493' cy='54' r='2' />
				<circle cx='497' cy='47' r='7' />
				<circle cx='497' cy='77' r='7' />
				<circle cx='497' cy='107' r='7' />
			</ContentLoader>
		)
	}

	return (
		<ContentLoader
			style={{
				margin: '20px 40px',
				marginBottom: '40px',
			}}
			height={80}
			width={1060}
		>
			<rect x='103' y='22' rx='3' ry='3' width='170' height='7' />
			<rect x='103' y='40' rx='3' ry='3' width='250' height='7' />
			<circle cx='44' cy='42' r='38' />
			<rect x='105' y='58' rx='3' ry='3' width='250' height='6' />
		</ContentLoader>
	)
}

export default Preloader
