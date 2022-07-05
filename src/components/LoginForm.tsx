
import React, { useState } from 'react'
import { FormControl, InputLabel, IconButton, FormHelperText, InputAdornment, OutlinedInput, Link, Button, Box} from '@mui/material'
import {AccountCircle , Visibility, VisibilityOff} from '@mui/icons-material'
import '../styles/loginForm.sass'

const LoginForm: React.FC = () => {

    interface State {
        amount: string;
        password: string;
        weight: string;
        weightRange: string;
        showPassword: boolean;
      }

      const [values, setValues] = useState({
          amount: '',
          password: '',
          weight: '',
          weightRange: '',
          showPassword: false,
        });

        const handleChange =
          (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
          };

        const handleClickShowPassword = () => {
          setValues({
            ...values,
            showPassword: !values.showPassword,
          });
        };

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
        };
    
    return (
        <Box component={"form"} className="login-form" autoComplete='off'>
            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <OutlinedInput
                className="login-form-input"
                id="email" 
                aria-describedby="email-helper-text" 
                label="Email address" 
                endAdornment={
                <InputAdornment position="end">
                    <AccountCircle />
                </InputAdornment>
                }
                />
                <FormHelperText id="email-helper-text">We&apos;ll never share your email.</FormHelperText>
            </FormControl>

            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    className='login-form-input'
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
            <Button className="login-form-button" variant="contained">Login</Button>

            <div className="login-form-wrapper">
                <Link component={"a"} href="/create" underline="hover" color="inherit">Create Account</Link>
                <Link component={"a"} href="/" underline="hover" color="inherit">Forgot Password?</Link>
            </div>
        </Box>
    )
}
export default LoginForm
