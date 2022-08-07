import style from './User.module.css'
import logo from './../../../assets/img/no-logo.jpg'
import {NavLink} from "react-router-dom";

const User = ({id, followed, name, status, follow, photos}) => {
  const stylesForBtn = {
    backgroundColor: followed ? 'var(--red-primary)' : 'var(--blue-secondary)',
    color: followed ? '#000' : 'var(--gray-primary)',
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <NavLink style={{textDecoration: 'none', color: '#000'}} to={`/profile/${id}`}>
            <img
              className={style.image}
              src={
                photos.small
                  ? photos.small
                  : logo
              }
              alt='logo'
            />
          </NavLink>
          <button
            onClick={() => follow(id)}
            className={style.followBtn}
            style={stylesForBtn}
          >
            {followed ? 'Follow' : 'Unfollow'}
          </button>
        </div>
        <div className={style.info}>
          <NavLink style={{textDecoration: 'none', color: '#000'}} to={`/profile/${id}`}>
            <div>
              <h4 className={style.fullName}>{name}</h4>
              <p className={style.status}>{status ? status : 'No status'}</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default User
