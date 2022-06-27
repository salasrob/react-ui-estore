
import React, { useState } from 'react'
import { FormControl, InputLabel, Input, FormHelperText} from '@mui/material'
import styled from '@emotion/styled'

const StyledForm = styled.form`
padding: 25px;
background-color: #d3eba7;
border-radius: 3px;
display:flex;
flex-direction:column;
`;

const StyledButton = styled.button`
padding: 10px;
background-color: #86b42f;
border-radius: 3px;
width:100%
`;

const StyledH2 = styled.h3`
color:#608121;
`

const StyledWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
padding-top:25px;
`



const LoginForm: React.FC = () => {
    return (
        <StyledForm>
            <StyledH2>Welcome, login to shop</StyledH2>
            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" aria-describedby="email-helper-text" />
                <FormHelperText id="email-helper-text">We&apos;ll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password"/>
            </FormControl>
            <StyledButton>Login</StyledButton>
            <StyledWrapper>
                <StyledButton>Create Account</StyledButton>
                <StyledButton>Forgot password?</StyledButton>
       
            </StyledWrapper>
        </StyledForm>
    )
}

export default LoginForm
