import styles from './ProfileInfo.module.css'
import noLogo from '../../../assets/img/no-logo.jpg'
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = ({profile}) => {
  if (!profile) return <Preloader variant='profile'/>
  let contacts = []
  for (let url in profile.contacts) {
    profile.contacts[url] ? contacts.push(url) : null
  }
  return (<>
      <div className={styles.profileImages}>
        <div className={styles.profileBackground}>
          <img src={profile.photos?.large ? profile.photos?.large : noLogo} alt='background-photo'/>
        </div>
        <div className={styles.profileLogo}>
          <img
            src={profile.photos?.small ? profile.photos?.small : noLogo}
            alt='logo'
          />
        </div>
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profileName}><h6>{profile.fullName}</h6></div>
        <div>
          <strong>About: <span
            style={{fontWeight: '400'}}>{profile.aboutMe ? profile.aboutMe : 'No bio'}</span></strong>
        </div>
        <div>
          <strong>Looking for a job: <span
            style={{fontWeight: '400'}}>{profile.lookingForAJob ? 'Yes' : 'No'}</span></strong>
        </div>
        <div>
          <strong>Description for looking a job: <span
            style={{fontWeight: '400'}}>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No desc'}</span></strong>
        </div>
        <div>
          <h6 style={{fontSize: '16px'}}>Contacts:</h6>
          <ul>
            {contacts.length ? contacts.map((contact, index) => {
              return <li className={styles.contacts} key={index}><a target='_blank' href={'//' + profile.contacts[contact]}>{contact}</a>
              </li>
            }) : 'No contacts'}
          </ul>
        </div>
      </div>
    </>)
}

export default ProfileInfo
