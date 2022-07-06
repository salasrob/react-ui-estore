import React from 'react'
import { FormControl, InputLabel, FormHelperText, OutlinedInput, Box, InputAdornment, IconButton, FormControlLabel, Checkbox } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type User = {
    username: string
    cohort: string
    email: string
    confirmEmail: string
    password: string
    confirmPassword: string
    showPassword: boolean

    firstName: string
    middleName: string
    lastName: string
    dateOfBirth: string
    gender: string
    phoneNumber: string
    streetAddress: string
    addressUnit: string
    city: string
    state: string
    county: string
    zip: string
    country: string
}

type Props = {
    handleChange: (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClickShowPassword: () => void
    user: User
}

const AccountDetailsForm: React.FC<Props> = (props) => {
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    return (
        <>
            <Box component={'form'} className="create-form-fields" autoComplete="off">
                <h1>Account Info</h1>
                <p>Please fill out your account info</p>
                <div className="create-form-input-wrapper">
                    <div className="create-form-input-group">
                        <FormControl>
                            <InputLabel htmlFor="username">User name</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="username"
                                aria-describedby="username-helper-text"
                                label="User name"
                                value={props.user.username}
                                onChange={props.handleChange('username')}
                            />
                            <FormHelperText id="username-helper-text">We&apos;ll never share or sell your personal information</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="cohort">Cohort</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="cohort"
                                label="Cohort"
                                value={props.user.cohort}
                                onChange={props.handleChange('cohort')}
                            />
                        </FormControl>
                        {/* TODO: Connect checkbox to disable cohort input */}
                        <FormControlLabel control={<Checkbox defaultChecked />} label="No cohort" />
                    </div>
                    <div className="create-form-input-group">
                        <FormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="email"
                                label="Email"
                                value={props.user.email}
                                onChange={props.handleChange('email')}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="confirmEmail">Confirm Email</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="confirmEmail"
                                label="Confirm Email"
                                value={props.user.confirmEmail}
                                onChange={props.handleChange('confirmEmail')}
                            />
                        </FormControl>
                    </div>
                    <div className="create-form-input-group">
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="outlined-adornment-password"
                                type={props.user.showPassword ? 'text' : 'password'}
                                value={props.user.password}
                                onChange={props.handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={props.handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {props.user.showPassword ? <VisibilityOff /> : <Visibility />}
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
                                type={props.user.showPassword ? 'text' : 'password'}
                                value={props.user.confirmPassword}
                                onChange={props.handleChange('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={props.handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {props.user.showPassword ? <VisibilityOff /> : <Visibility />}
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
