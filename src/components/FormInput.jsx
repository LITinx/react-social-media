import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { useState } from 'react'

const settings = { inputProps: { 'aria-label': 'Checkbox demo' } }

const FormInput = ({
	label,
	name,
	register,
	boolean,
	defaultValue,
	...props
}) => {
	const [checked, setChecked] = useState(defaultValue)
	const handleChange = () => {
		setChecked((state) => (state = !defaultValue))
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
