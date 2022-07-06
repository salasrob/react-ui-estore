import React, { useState } from 'react'
import { Typography, Stepper, StepButton, Step, Button, Box, useMediaQuery, SelectChangeEvent } from '@mui/material'
import PersonalDetailsForm from './PersonalDetailsForm'
import '../styles/createUserForm.sass'
import AccountDetailsForm from './AccountDetailsForm'

const steps = ['Account Details', 'Personal Information', 'Demographic Info', 'Questionnaire', 'Review']

const CreateUserForm: React.FC = () => {
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

    const matches = useMediaQuery('(min-width:768px)');

    const [userForm, setUserForm] = useState({
        username: '',
        cohort: '',
        email: '',
        confirmEmail: '',
        password: "",
        confirmPassword: "",
        showPassword: false,

        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        phoneNumber: "",
        streetAddress: "",
        addressUnit: "",
        city: "",
        state: "",
        county: "",
        zip: "",
        country: ""
    })

    const handleClickShowPassword = () => {
        setUserForm({
            ...userForm,
            showPassword: !userForm.showPassword
        })
    }

    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserForm({ ...userForm, [prop]: event.target.value })
    }

    const handleSelectChange = (event: SelectChangeEvent) => {
        if(event.target.name == "gender")
        setUserForm({ ...userForm, gender: event.target.value as string })
        if(event.target.name == "state")
        setUserForm({ ...userForm, state: event.target.value as string })
    }

    const [activeStep, setActiveStep] = React.useState(0)
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean
    }>({})

    const totalSteps = () => {
        return steps.length
    }

    const completedSteps = () => {
        return Object.keys(completed).length
    }

    const isLastStep = () => {
        return activeStep === totalSteps() - 1
    }

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps()
    }

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1
        setActiveStep(newActiveStep)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleStep = (step: number) => () => {
        setActiveStep(step)
    }

    const handleComplete = () => {
        const newCompleted = completed
        newCompleted[activeStep] = true
        setCompleted(newCompleted)
        handleNext()
    }

    const handleReset = () => {
        setActiveStep(0)
        setCompleted({})
    }

    return (
        <div className="create-form-wrapper">
            <div className="create-form">
                {activeStep == 0 ? <AccountDetailsForm handleChange={handleChange} user={userForm} handleClickShowPassword={handleClickShowPassword}/> : null }
                {activeStep == 1 ? <PersonalDetailsForm handleChange={handleChange}  handleSelectChange={handleSelectChange} user={userForm} /> : null }
                <div className="create-form-controls">
                    <Box sx={{ width: '100%' }}>
                        {matches ?  <Stepper nonLinear activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step key={label} completed={completed[index]}>
                                    <StepButton color="inherit" onClick={handleStep(index)}>
                                        {label}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper> : null}
                        <div>
                            {allStepsCompleted() ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleNext} sx={{ mr: 1 }}>
                                            Next
                                        </Button>
                                        {activeStep !== steps.length &&
                                             (
                                                <Button onClick={handleComplete}>{completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}</Button>
                                            )}
                                    </Box>
                                </React.Fragment>
                            )}
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}
export default CreateUserForm
