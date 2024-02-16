import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { InfoTypeForm } from './Settings/SettingsSections/GeneralListSection'

const settings = { inputProps: { 'aria-label': 'Checkbox demo' } }

type PropsType = {
	label: string
	name: keyof InfoTypeForm
	register: UseFormRegister<InfoTypeForm>
	boolean?: boolean
	defaultValue?: boolean
}

const FormInput = ({
	label,
	name,
	register,
	boolean = false,
	defaultValue = false,
	...props
}: PropsType) => {
	const [checked, setChecked] = useState<boolean>(defaultValue)
	const handleChange = () => {
		setChecked(!defaultValue)
	}
	return (
		<>
			{boolean ? (
				<FormControlLabel
					control={
						<Checkbox
							{...settings}
							{...register(name)}
							checked={checked}
							onChange={handleChange}
							{...props}
						/>
					}
					label={label}
				/>
			) : (
				<TextField
					id='outlined-basic'
					label={label}
					variant='outlined'
					size='small'
					autoComplete='off'
					{...register(name)}
					{...props}
				/>
			)}
		</>
	)
}

export default FormInput
