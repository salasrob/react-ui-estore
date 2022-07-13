import React, { useState } from 'react'
import { FormControl, InputLabel, OutlinedInput, Button, Box } from '@mui/material'
import logoSmall from '../../../assets/images/logoSmall.png'
import { Login } from '../../../types/user'

const ResetPassword: React.FC = () => {
    const [formValues, setFormValues] = useState({
        email: ''
    })

    const handleChange = (prop: keyof Login) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [prop]: event.target.value })
    }
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={logoSmall} alt="Save A Warrior logo" />
            <Box component={'form'} className="login-form" autoComplete="off" textAlign={'center'}>
                <h1>Reset password</h1>
                <p>Enter your email to reset your password</p>
                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <OutlinedInput className="login-form-input" id="email" label="Email address" onChange={handleChange('email')} value={formValues.email} />
                </FormControl>

                <Button className="login-form-button" variant="contained">
                    Reset Password
                </Button>
            </Box>
        </div>
    )
}
export default ResetPassword
