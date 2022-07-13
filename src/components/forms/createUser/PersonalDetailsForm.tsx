import React from 'react'
import { FormControl, InputLabel, FormHelperText, OutlinedInput, Box, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import {User} from '../../../types/user'

type Props = {
    handleChange: (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSelectChange: (event: SelectChangeEvent) => void
    user: User
}

const PersonalDetailsForm: React.FC<Props> = (props) => {
    return (
            <Box component={'form'} className="create-form-fields" autoComplete="off">
                <h1>Personal Info</h1>
                <p>Please fill out your personal info</p>
                <div className="create-form-input-wrapper">
                    <div className="create-form-input-group">
                    <h3>Name</h3>
                        <FormControl>
                            <InputLabel htmlFor="firstName">First name</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="firstName"
                                aria-describedby="firstName-helper-text"
                                label="First name"
                                value={props.user.firstName}
                                onChange={props.handleChange('firstName')}
                            />
                            <FormHelperText id="firstName-helper-text">Please provide legal name</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="middleName">Middle name</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="middleName"
                                label="Middle name"
                                value={props.user.middleName}
                                onChange={props.handleChange('middleName')}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="lastName">Last name</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="lastName"
                                label="Last name"
                                value={props.user.lastName}
                                onChange={props.handleChange('lastName')}
                            />
                        </FormControl>
                    </div>
                    <div className="create-form-input-group">
                    <h3>DOB/Gender</h3>
                        <FormControl>
                            <OutlinedInput
                                id="dateOfBirth"
                                type="date"
                                aria-describedby="date-helper-text"
                                value={props.user.dateOfBirth}
                                onChange={props.handleChange('dateOfBirth')}
                            />
                            <FormHelperText id="date-helper-text">Please provide your date of birth</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="gender">Gender</InputLabel>
                            <Select className="create-form-select-input" 
                                name="gender" 
                                label="Gender"
                                value={props.user.gender} 
                                onChange={props.handleSelectChange}>
                                <MenuItem value=""
                            >
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'male'}>Male</MenuItem>
                                <MenuItem value={'female'}>Female</MenuItem>
                                <MenuItem value={'nonBinary'}>Non-binary</MenuItem>
                                <MenuItem value={'other'}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="create-form-input-group">
                    <h3>Contact Info</h3>
                    <FormControl>
                            <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="phoneNumber"
                                label="Phone number"
                                value={props.user.phoneNumber}
                                onChange={props.handleChange('phoneNumber')}
                            />
                        </FormControl>
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
                        <h3>Address</h3>
                        <FormControl>
                            <InputLabel htmlFor="streetAddress">Street address</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="streetAddress"
                                label="Street address"
                                value={props.user.streetAddress}
                                onChange={props.handleChange('streetAddress')}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="addressUnit">Unit</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="addressUnit"
                                label="Unit"
                                value={props.user.addressUnit}
                                onChange={props.handleChange('addressUnit')}
                            />
                        </FormControl>
                    </div>
                    <div className="create-form-input-group">
                        <FormControl>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <OutlinedInput 
                                className="create-form-input" 
                                id="city" label="City" 
                                value={props.user.city} 
                                onChange={props.handleChange('city')} 
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="state">State</InputLabel>
                            <Select
                                className="create-form-select-input"
                                name="state"
                                label="State"
                                value={props.user.state}
                                onChange={props.handleSelectChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'TX'}>Texas</MenuItem>
                                <MenuItem value={'CA'}>California</MenuItem>
                                <MenuItem value={'OH'}>Ohio</MenuItem>
                                <MenuItem value={'NV'}>Nevada</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="county">County</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="county"
                                label="County"
                                value={props.user.county}
                                onChange={props.handleChange('county')}
                            />
                        </FormControl>
                    </div>
                    <div className="create-form-input-group">
                        <FormControl>
                            <InputLabel htmlFor="zip">Zip</InputLabel>
                            <OutlinedInput className="create-form-input" id="zip" label="Zip" value={props.user.zip} onChange={props.handleChange('zip')} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="country">Country</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="country"
                                label="country"
                                value={props.user.country}
                                onChange={props.handleChange('country')}
                            />
                        </FormControl>
                    </div>
                </div>
            </Box>
    )
}
export default PersonalDetailsForm
