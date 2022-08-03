import style from './User.module.css'
import logo from './../../../assets/img/no-logo.png'
import Preloader from "../../Preloader/Preloader";

const User = ({id, followed, name, status, follow, photos, isFetching}) => {
  const stylesForBtn = {
    backgroundColor: followed ? 'var(--red-primary)' : 'var(--blue-secondary)',
    color: followed ? '#000' : 'var(--gray-primary)',
  }

  return (
    <>
      {
        isFetching ? <Preloader/>
          : <div className={style.wrapper}>
            <div className={style.logo}>
              <img
                className={style.image}
                src={
                  photos.small
                    ? photos.small
                    : logo
                }
                alt='logo'
              />
              <button
                onClick={() => follow(id)}
                className={style.followBtn}
                style={stylesForBtn}
              >
                {followed ? 'Follow' : 'Unfollow'}
              </button>
            </div>
            <div className={style.info}>
              <div>
                <h4 className={style.fullName}>{name}</h4>
                <p className={style.status}>{status ? status : 'No status'}</p>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default User
