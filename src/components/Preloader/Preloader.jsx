import ContentLoader from 'react-content-loader'

const Preloader = (props) => {
  return (
    <ContentLoader
      style={{
        margin: '20px 40px',
        marginBottom: '40px'
      }}
      height={80}
      width={1060}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="103" y="22" rx="3" ry="3" width="170" height="7" />
      <rect x="103" y="40" rx="3" ry="3" width="250" height="7" />
      <circle cx="44" cy="42" r="38" />
      <rect x="105" y="58" rx="3" ry="3" width="250" height="6" />
    </ContentLoader>
  )
}


export default Preloader