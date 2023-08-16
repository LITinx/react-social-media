import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import styles from './ProfileInfo.module.css'

const schema = yup.object().shape({
	statusText: yup.string().max(50),
})
const ProfileStatus = ({ status, updateUserStatus }) => {
	const [editMode, setEditMode] = useState(false)
	const [value, setValue] = useState(status)
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	})
	useEffect(() => {
		setValue(status)
	}, [status])
	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = (data) => {
		setEditMode(false)
		updateUserStatus(data.statusText)
	}
	return (
		<div>
			{editMode ? (
				<div className={styles.statusInput}>
					<form onSubmit={handleSubmit(deactivateEditMode)}>
						<input {...register('statusText')} autoFocus type='text' />
					</form>
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
