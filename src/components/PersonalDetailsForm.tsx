import React from 'react'
import { FormControl, InputLabel, FormHelperText, OutlinedInput, Box } from '@mui/material'

const PersonalDetailsForm: React.FC = () => {
    return (
        <>
            <h1>Please fill out your personal information</h1>
            <Box component={'form'} className="create-form-fields" autoComplete="off">
                <div className="create-form-input-wrapper">
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="firstName">First name</InputLabel>
                            <OutlinedInput className="create-form-input" id="firstName" aria-describedby="firstName-helper-text" label="First name" />
                            <FormHelperText id="firstName-helper-text">Please provide legal name</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="middleName">Middle name</InputLabel>
                            <OutlinedInput className="create-form-input" id="firstName" label="Middle name" />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="lastName">Last name</InputLabel>
                            <OutlinedInput className="create-form-input" id="lastName" label="Last name" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="dateOfBirth">Date of birth</InputLabel>
                            <OutlinedInput className="create-form-input" id="dateOfBirth" aria-describedby="dateOfBirth-helper-text" label="Date of birth" />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="gender">Gender</InputLabel>
                            <OutlinedInput className="create-form-input" id="gender" label="Gender" />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
                            <OutlinedInput className="create-form-input" id="phoneNumber" label="Phone number" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="streetAddress">Street address</InputLabel>
                            <OutlinedInput className="create-form-input" id="streetAddress" label="Street address" />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="unit">Unit</InputLabel>
                            <OutlinedInput className="create-form-input" id="unit" label="Unit" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <OutlinedInput className="create-form-input" id="city" label="City" />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="State">State</InputLabel>
                            <OutlinedInput className="create-form-input" id="state" label="State" />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="zip">Zip</InputLabel>
                            <OutlinedInput className="create-form-input" id="zip" label="Zip" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="country">Country</InputLabel>
                            <OutlinedInput className="create-form-input" id="country" label="country" />
                        </FormControl>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default PersonalDetailsForm
