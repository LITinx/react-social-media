import { useEffect, useState } from 'react'
import styles from './ProfileInfo.module.css'

const ProfileStatus = ({ status, updateUserStatus }) => {
	const [editMode, setEditMode] = useState(false)
	const [value, setValue] = useState(status)
	useEffect(() => {
		setValue(status)
	}, [status])
	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		updateUserStatus(value)
	}

	const handleValue = (e) => {
		setValue(e.target.value)
	}
	return (
		<div>
			{editMode ? (
				<div className={styles.statusInput}>
					<input
						autoFocus
						type='text'
						onBlur={deactivateEditMode}
						onChange={(e) => handleValue(e)}
						value={value}
					/>
				</div>
			) : (
				<div className={styles.statusText}>
					<span onDoubleClick={activateEditMode}>
						{status || 'This place for your status'}
					</span>
				</div>
			)}
		</div>
	)
}

export default ProfileStatus
