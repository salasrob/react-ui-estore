import React from 'react'
import { FormControl, InputLabel, OutlinedInput, Box, Select, MenuItem } from '@mui/material'
import {User} from '../../../types/user'

type Props = {
    user: User
    handleClickShowPassword: () => void
}

const ReviewForm: React.FC<Props> = (props) => {
    return (
            <Box component={'form'} className="create-form-fields" autoComplete="off">
                <h1>Review Personal Info</h1>

                <div className="create-form-input-wrapper">
                    <div className="create-form-input-group">
                    <h3>Name</h3>
                        <FormControl>
                            <InputLabel htmlFor="firstName">First name</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="firstName"
                                label="First name"
                                value={props.user.firstName}
                                readOnly
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="middleName">Middle name</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="middleName"
                                label="Middle name"
                                value={props.user.middleName}
                                readOnly
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="lastName">Last name</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="lastName"
                                label="Last name"
                                value={props.user.lastName}
                                readOnly
                            />
                        </FormControl>
                    </div>

                    <div className="create-form-input-group">
                    <h3>DOB/Gender</h3>
                        <FormControl>
                            <OutlinedInput
                                id="dateOfBirth"
                                type="date"
                                value={props.user.dateOfBirth}
                                readOnly
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="gender">Gender</InputLabel>
                            <Select 
                                className="create-form-select-input" 
                                name="gender" 
                                value={props.user.gender} 
                                readOnly
                                label="Gender"
                            >
                                <MenuItem value="">
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
                    <FormControl>
                            <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="phoneNumber"
                                label="Phone number"
                                value={props.user.phoneNumber}
                                readOnly
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput 
                                className="create-form-input" 
                                id="email" 
                                label="Email" 
                                value={props.user.email} 
                                readOnly 
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="confirmEmail">Confirm Email</InputLabel>
                            <OutlinedInput 
                                className="create-form-input" 
                                id="confirmEmail" 
                                label="Confirm Email" 
                                value={props.user.confirmEmail}
                                readOnly 
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
                                readOnly
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="addressUnit">Unit</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="addressUnit"
                                label="Unit"
                                value={props.user.addressUnit}
                                readOnly
                            />
                        </FormControl>
                    </div>
                    <div className="create-form-input-group">
                        <FormControl>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <OutlinedInput 
                                className="create-form-input" 
                                id="city" 
                                label="City" 
                                value={props.user.city} 
                                readOnly 
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="state">State</InputLabel>
                            <Select
                                className="create-form-select-input"
                                name="state"
                                label="State"
                                value={props.user.state}
                                readOnly
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
                                readOnly
                            />
                        </FormControl>
                    </div>
                    <div className="create-form-input-group">
                        <FormControl>
                            <InputLabel htmlFor="zip">Zip</InputLabel>
                            <OutlinedInput 
                                className="create-form-input" 
                                id="zip" 
                                label="Zip" 
                                value={props.user.zip} 
                                readOnly
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="country">Country</InputLabel>
                            <OutlinedInput
                                className="create-form-input"
                                id="country"
                                label="country"
                                value={props.user.country}
                                readOnly
                            />
                        </FormControl>
                    </div>
                    {/* Add in struggling with form text area */}
                </div>
            </Box>
    )
}
export default ReviewForm