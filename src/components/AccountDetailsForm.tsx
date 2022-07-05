import React, { useState } from 'react'
import { FormControl, InputLabel, FormHelperText, OutlinedInput, Box, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
const AccountDetailsForm: React.FC = () => {
    interface State {
        amount: string
        password: string
        confirmPassword: string
        weight: string
        weightRange: string
        showPassword: boolean
    }

    const [values, setValues] = useState({
        amount: '',
        password: '',
        confirmPassword: '',
        weight: '',
        weightRange: '',
        showPassword: false
    })

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        })
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    return (
        <>
            <h1>Please fill out your account information</h1>
            <Box component={'form'} className="create-form-fields" autoComplete="off">
                <div>
                    <div>
                    <FormControl>
                        <InputLabel htmlFor="userName">User name</InputLabel>
                        <OutlinedInput className="create-form-input" id="userName" aria-describedby="userName-helper-text" label="User name" />
                        <FormHelperText id="userName-helper-text">We&apos;ll never share or sell your personal information</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="userName">Display name</InputLabel>
                        <OutlinedInput className="create-form-input" id="displayName" label="Display name" />
                    </FormControl>
                    </div>
                    <div>
                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput className="create-form-input" id="email" label="Email" />
                    </FormControl>
                    </div>
                    <div>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            className="create-form-input"
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            className="create-form-input"
                            id="outlined-adornment-confirm-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                    </FormControl>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default AccountDetailsForm
