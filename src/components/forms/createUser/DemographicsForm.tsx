import React from 'react'
import { FormControl, FormLabel, Box, Radio, FormControlLabel, RadioGroup } from '@mui/material'
import { User } from '../../../types/user'

type Props = {
    handleChange: (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => void
    user: User
}
const DemographicForm: React.FC<Props> = (props) => {
    return (
        <Box component={'form'} className="create-form-fields" autoComplete="off">
            <h1>Demographic Info</h1>
            <div className="create-form-input-wrapper">
                <div className="create-form-input-group">
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup onChange={props.handleChange('gender')} className="create-form-input">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="nonBinary" control={<Radio />} label="Non-Binary" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="create-form-input-group">
                    <FormControl>
                        <FormLabel>Ethnic Background</FormLabel>
                        <RadioGroup onChange={props.handleChange('ethnicBackground')} className="create-form-input">
                            <FormControlLabel value="whiteOrCaucasion" control={<Radio />} label="White/Caucasion" />
                            <FormControlLabel value="blackOrAfricanAmerican" control={<Radio />} label="Black/African American" />
                            <FormControlLabel value="latinoOrHispanic" control={<Radio />} label="Latino or Hispanic" />
                            <FormControlLabel value="asian" control={<Radio />} label="Asian" />
                            <FormControlLabel value="nativeAmerican" control={<Radio />} label="Native American" />
                            <FormControlLabel value="nativeHawaiianOrPacificIslander" control={<Radio />} label="Native Hawaiian or Pacific Islander" />
                            <FormControlLabel value="multiracial" control={<Radio />} label="Multiracial" />
                            <FormControlLabel value="otherOrUnknown" control={<Radio />} label="Other/Unknown" />
                            <FormControlLabel value="multiracial" control={<Radio />} label="Multiracial" />
                            <FormControlLabel value="preferNotToAnswer" control={<Radio />} label="Prefer not to answer" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="create-form-input-group">
                    <FormControl>
                        <FormLabel>Highest Level of Education</FormLabel>
                        <RadioGroup onChange={props.handleChange('highestLevelOfEducation')} className="create-form-input">
                            <FormControlLabel value="highSchoolGradOrGED" control={<Radio />} label="High School Graduate/GED" />
                            <FormControlLabel value="associatesDegree" control={<Radio />} label="Associate's Degree" />
                            <FormControlLabel value="bachelorsDegree" control={<Radio />} label="Bachelor's Degree" />
                            <FormControlLabel value="graduatesDegree" control={<Radio />} label="Graduate's Degree" />
                            <FormControlLabel value="doctoratesDegree" control={<Radio />} label="Doctorate Degree" />
                            <FormControlLabel value="someCollege" control={<Radio />} label="Some college" />
                            <FormControlLabel value="preferNotToAnswer" control={<Radio />} label="Prefer not to answer" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="create-form-input-group">
                    <FormControl>
                        <FormLabel>Marital Status</FormLabel>
                        <RadioGroup onChange={props.handleChange('maritalStatus')} className="create-form-input">
                            <FormControlLabel value="single" control={<Radio />} label="Single, never married" />
                            <FormControlLabel value="marriedOrDomesticPartner" control={<Radio />} label="Married or domestic partnership" />
                            <FormControlLabel value="widowed" control={<Radio />} label="Widowed" />
                            <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                            <FormControlLabel value="seperated" control={<Radio />} label="Seperated" />
                            <FormControlLabel value="preferNotToAnswer" control={<Radio />} label="Prefer not to answer" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="create-form-input-group">
                    <FormControl>
                        <FormLabel>How many children live with you?</FormLabel>
                        <RadioGroup onChange={props.handleChange('numberOfChildrenInHome')} className="create-form-input">
                            <FormControlLabel value="0" control={<Radio />} label="0" />
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value=">=4" control={<Radio />} label="4 or more" />
                            <FormControlLabel value="preferNotToAnswer" control={<Radio />} label="Prefer not to answer" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="create-form-input-group">
                    <FormControl>
                        <FormLabel>Annual household income</FormLabel>
                        <RadioGroup onChange={props.handleChange('annualHouseholdIncome')} className="create-form-input">
                            <FormControlLabel value="<25000" control={<Radio />} label="Less than $25,000" />
                            <FormControlLabel value="25000-50000" control={<Radio />} label="$25,000 - $50,000" />
                            <FormControlLabel value="50000-100000" control={<Radio />} label="$50,000 - $100,000" />
                            <FormControlLabel value="100000-200000" control={<Radio />} label="$100,000 - $200,000" />
                            <FormControlLabel value=">200000" control={<Radio />} label="More than $200,000" />
                            <FormControlLabel value="preferNotToAnswer" control={<Radio />} label="Prefer not to answer" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="create-form-input-group">
                    <FormControl>
                        <FormLabel>Military Branch or First Responder Type</FormLabel>
                        <RadioGroup onChange={props.handleChange('militaryBranchOrFirstResponderType')} className="create-form-input">
                            <FormControlLabel value="army" control={<Radio />} label="Army" />
                            <FormControlLabel value="navy" control={<Radio />} label="Navy" />
                            <FormControlLabel value="airForce" control={<Radio />} label="Air Force" />
                            <FormControlLabel value="marineCorps" control={<Radio />} label="Marine Corps" />
                            <FormControlLabel value="coastGuard" control={<Radio />} label="Coast Guard" />
                            <FormControlLabel value="spaceForce" control={<Radio />} label="Space Force" />
                            <FormControlLabel value="lawEnforcement" control={<Radio />} label="Law Enforcement" />
                            <FormControlLabel value="fireFighter" control={<Radio />} label="Firefighter" />
                            <FormControlLabel value="emt" control={<Radio />} label="EMT" />
                            <FormControlLabel value="rescue" control={<Radio />} label="Rescue" />
                            <FormControlLabel value="paramedic" control={<Radio />} label="Paramedic" />
                            <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
                            <FormControlLabel value="nurse" control={<Radio />} label="Nurse" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </Box>
    )
}
export default DemographicForm
