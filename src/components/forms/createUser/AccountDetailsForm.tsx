import React from 'react'
import { FormControl,SelectChangeEvent, Select, MenuItem, InputLabel, Radio, RadioGroup, FormLabel, OutlinedInput, Box, FormControlLabel } from '@mui/material'
import { User } from '../../../types/user'

type Props = {
    handleChange: (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSelectChange: (event: SelectChangeEvent) => void
    handleRadioChange: (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClickShowPassword: () => void
    user: User
}
const AccountDetailsForm: React.FC<Props> = (props) => {
    return (
        <Box component={'form'} className="create-form-fields" autoComplete="off">
            <h1>Save A Warrior (SAW) Application</h1>
            <div className="create-form-input-wrapper">
                <div className="create-form-input-group">
                    <FormControl>
                        <FormLabel>Are you already a SAW alumni?</FormLabel>
                        <RadioGroup
                            className="create-form-input"
                            name="radio-buttons-group"
                            id="isSAWAlumni"
                            value={props.user.isSAWAlumni}
                            onChange={props.handleRadioChange("isSAWAlumni")}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    {props.user.isSAWAlumni == true ? (
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
                    ) : null}
                </div>
                {props.user.isSAWAlumni == false ? (
                    <>
                        {' '}
                        <div className="create-form-input-group">
                            <FormControl>
                                <FormLabel>Did you hear about Save A Warrior (SAW) from someone who has already attended?</FormLabel>
                                <RadioGroup onChange={props.handleRadioChange('referredByAlumni')} className="create-form-input">
                                    <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        {props.user.referredByAlumni == true ? (
                            <div className="create-form-input-group">
                                <FormControl variant="outlined">
                                    <InputLabel>Name of alumni who referred you</InputLabel>
                                    <OutlinedInput
                                        onChange={props.handleChange('referrerName')}
                                        className="create-form-input"
                                        label="Name of alumni who referred you"
                                    />
                                </FormControl>
                            </div>
                        ) : <div className="create-form-input-group">
                        <FormControl fullWidth>
                        <InputLabel>How did you hear about SAW?</InputLabel>
                            <Select
                                value={props.user.referredByEntityName}
                                label="How did you hear about SAW?"
                                onChange={props.handleSelectChange}
                                name="referredByEntity"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"graysConstruction"}>Grays Construction</MenuItem>
                                <MenuItem value={"vetCenter"}>Vet Center</MenuItem>
                                <MenuItem value={"other"}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </div>}
                        <div className="create-form-input-group">
                            <FormControl>
                                <FormLabel>I am applying as...</FormLabel>
                                <RadioGroup onChange={props.handleChange('applicantType')} className="create-form-input">
                                    <FormControlLabel value="militaryMember" control={<Radio />} label="Military Member" />
                                    <FormControlLabel value="firstResponder" control={<Radio />} label="First Responder" />
                                    <FormControlLabel value="civilian" control={<Radio />} label="Civilian (non Military or First Responder)" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="create-form-input-group">
                            <FormControl>
                                <FormLabel>Military Status</FormLabel>
                                <RadioGroup onChange={props.handleChange('militaryStatus')} className="create-form-input">
                                    <FormControlLabel value="activeDutyMilitary" control={<Radio />} label="Active Duty Military" />
                                    <FormControlLabel value="seperatedMilitary" control={<Radio />} label="Seperated Military" />
                                    <FormControlLabel value="retiredMilitary" control={<Radio />} label="Retired Military" />
                                    <FormControlLabel value="notAvailable" control={<Radio />} label="N/A" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="create-form-input-group">
                            <FormControl>
                                <FormLabel>First Responder Status</FormLabel>
                                <RadioGroup onChange={props.handleChange('firstResponderStatus')} className="create-form-input">
                                    <FormControlLabel value="activeFirstResponder" control={<Radio />} label="Active First Responder" />
                                    <FormControlLabel value="seperatedFirstResponder" control={<Radio />} label="Seperated First Responder" />
                                    <FormControlLabel value="retiredFirstResponder" control={<Radio />} label="Retired First Responder" />
                                    <FormControlLabel value="notAvailable" control={<Radio />} label="N/A" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="create-form-input-group">
                            <FormControl variant="outlined">
                                <InputLabel>Most Recent Unit or Agency</InputLabel>
                                <OutlinedInput onChange={props.handleChange('unitOrAgency')} className="create-form-input" label="Most Recent Unit or Agency" />
                            </FormControl>
                        </div>{' '}
                    </>
                ) : null}
            </div>
        </Box>
    )
}
export default AccountDetailsForm