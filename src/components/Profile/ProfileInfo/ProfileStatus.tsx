import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import styles from './ProfileInfo.module.css'

type PropsType = {
	status: string
	updateUserStatus: (status: string) => void
}
type FieldValuesType = { statusText: string }

const schema = yup.object().shape({
	statusText: yup.string().max(50),
})
const ProfileStatus = ({ status, updateUserStatus }: PropsType) => {
	const [editMode, setEditMode] = useState(false)
	const [value, setValue] = useState(status)
	const { register, handleSubmit } = useForm<FieldValuesType>({
		resolver: yupResolver(schema),
	})

	useEffect(() => {
		setValue(status)
	}, [status])
	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = (data: { statusText: string }) => {
		console.log(data)
		setEditMode(false)
		updateUserStatus(data.statusText)
	}
	const onSubmit: SubmitHandler<FieldValuesType> = (data) =>
		deactivateEditMode(data)
	return (
		<div>
			{editMode ? (
				<div className={styles.statusInput}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							{...register('statusText')}
							autoFocus
							type='text'
							defaultValue={value}
						/>
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
