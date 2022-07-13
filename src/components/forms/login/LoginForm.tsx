
import React, { useState } from 'react'
import { FormControl, InputLabel, IconButton, InputAdornment, OutlinedInput, Link, Button, Box} from '@mui/material'
import {AccountCircle , Visibility, VisibilityOff} from '@mui/icons-material'
import {handleMouseDownPreventDefault} from '../../../utility/functions'
import { Login } from '../../../types/user'
import '../../../styles/loginForm.sass'

const LoginForm: React.FC = () => {

      const [formValues, setFormValues] = useState({
          email: '',
          password: '',
          showPassword: false,
        });

        const handleChange =
          (prop: keyof Login) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormValues({ ...formValues, [prop]: event.target.value });
          };

        const handleClickShowPassword = () => {
            setFormValues({
            ...formValues,
            showPassword: !formValues.showPassword,
          });
        };
    
    return (
        <Box component={"form"} className="login-form" autoComplete='off'>
            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <OutlinedInput
                onChange={handleChange('email')}
                value={formValues.email}
                className="login-form-input"
                id="email" 
                label="Email address" 
                endAdornment={
                <InputAdornment position="end">
                    <AccountCircle />
                </InputAdornment>
                }
                />
            </FormControl>

            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    className='login-form-input'
                    id="outlined-adornment-password"
                    type={formValues.showPassword ? 'text' : 'password'}
                    value={formValues.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPreventDefault}
                        edge="end"
                        >
                        {formValues.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <Button className="login-form-button" variant="contained">Login</Button>

            <div className="login-form-wrapper">
                <Link component={"a"} href="/create" underline="hover" color="inherit">Create Account</Link>
                <Link component={"a"} href="/reset" underline="hover" color="inherit">Forgot Password?</Link>
            </div>
        </Box>
    )
}
export default LoginForm
