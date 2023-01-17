import { useState } from 'react'
import styles from './ProfileInfo.module.css'

const ProfileStatus = ({ status }) => {
	const [editMode, setEditMode] = useState(false)
	const toggleEditMode = () => {
		setEditMode((prev) => !prev)
	}
	// const activateEditMode = () => {
	// 	setEditMode((prev) => (prev = true))
	// }
	// const deactivateEditMode = () => {
	// 	setEditMode((prev) => (prev = false))
	// }
	console.log(editMode)
	return (
		<div>
			{editMode ? (
				<div className={styles.statusInput}>
					<input autoFocus type='text' value={status} onBlur={toggleEditMode} />
				</div>
			) : (
				<div className={styles.statusText} onDoubleClick={toggleEditMode}>
					<span>{status}</span>
				</div>
			)}
		</div>
	)
}

export default ProfileStatus
