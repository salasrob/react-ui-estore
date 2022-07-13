import React, { useState, useEffect } from 'react'
import { Typography, Stepper, StepButton, Step, Button, Box, useMediaQuery, SelectChangeEvent } from '@mui/material'
import PersonalDetailsForm from '../components/forms/createUser/PersonalDetailsForm'
import '../styles/createUser.sass'
import AccountDetailsForm from '../components/forms/createUser/AccountDetailsForm'
import ReviewForm from '../components/forms/createUser/ReviewForm'
import DemographicForm from '../components/forms/createUser/DemographicsForm'
import { Questionnaires, User } from '../types/user'
import QuestionnaireForm from '../components/forms/createUser/QuestionnaireForm'
import { stringToBool } from '../utility/functions'

const CreateUserForm: React.FC = () => {
    const matches = useMediaQuery('(min-width:768px)')
//#region all state getters and setters
    const [userForm, setUserForm] = useState({
        username: '',
        cohort: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        isSAWAlumni: false,
        applicantType: '',

        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        phoneNumber: '',
        streetAddress: '',
        addressUnit: '',
        city: '',
        state: '',
        county: '',
        zip: '',
        country: '',

        ethnicBackground: '',
        highestLevelOfEducation: '',
        maritalStatus: '',
        numberOfChildrenInHome: '',
        annualHouseholdIncome: '',
        militaryBranchOrFirstResponderType: '',
        militaryStatus: '',
        firstResponderStatus: '',
        unitOrAgency: '',
        referredByAlumni: false,
        referrerName: '',
        referredByEntityName: ''
    })

    const [questionnaires, setQuestionnaires] = React.useState({
        substanceAbuse: [
            {
                question: '',
                answer: ''
            }
        ],
        suicidalBehavioral: [
            {
                question: '',
                answer: ''
            }
        ],
        patientHealth: [
            {
                question: '',
                answer: ''
            }
        ],
        ptsMilitaryChecklist: [
            {
                question: '',
                answer: ''
            }
        ]
    })

    const [activeStep, setActiveStep] = React.useState(0)
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean
    }>({})
    const [steps, setSteps] = React.useState<string[]>(['Account Details', 'Personal Information', 'Demographic Info', 'Questionnaire', 'Review'])
//#endregion

//#region handleClick methods
    const handleClickShowPassword = () => {
        setUserForm({
            ...userForm,
            showPassword: !userForm.showPassword
        })
    }
//#endregion

//#region handleChange methods
    const handleQuestionnaireChange = (prop: keyof Questionnaires) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const question: string = event.target.name,
            answer: string = event.target.value,
            clonedQuestionnaires = { ...questionnaires };
            let index = 0;
        const element = clonedQuestionnaires[prop].find((element, i) => {
                index = i
                if (element.question == question) return element
            });

        if (element == undefined) {
            clonedQuestionnaires[prop].push({ question: question, answer: answer })
            setQuestionnaires({ ...questionnaires, [prop]: clonedQuestionnaires[prop] })
        } else {
            element.answer = answer
            clonedQuestionnaires[prop][index].answer = element.answer
            setQuestionnaires({ ...questionnaires, [prop]: clonedQuestionnaires[prop] })
        }
    }

    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserForm({ ...userForm, [prop]: event.target.value })
    }

    const handleRadioChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const convertedBool: boolean = stringToBool(event.target.value)
        setUserForm({ ...userForm, [prop]: convertedBool })
    }

    const handleSelectChange = (event: SelectChangeEvent) => {
        if (event.target.name == 'gender') setUserForm({ ...userForm, gender: event.target.value as string })
        else if (event.target.name == 'state') setUserForm({ ...userForm, state: event.target.value as string })
        else if (event.target.name == 'referredByEntity') setUserForm({ ...userForm, referredByEntityName: event.target.value as string })
    }
//#endregion

//#region form stepper methods
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
//#endregion

//#region all effects 
    const removeSkippedSteps = React.useCallback(() => {
        if (userForm.isSAWAlumni) {
            const skipSteps: string[] = ['Account Details', 'Personal Information', 'Review']
            setSteps(skipSteps)
        } else {
            const allSteps: string[] = ['Account Details', 'Personal Information', 'Demographic Info', 'Questionnaire', 'Review']
            setSteps(allSteps)
        }
    }, [userForm.isSAWAlumni])

    useEffect(() => {
        removeSkippedSteps()
    }, [userForm.isSAWAlumni, removeSkippedSteps])
//#endregion

    return (
        <div className="create-form-wrapper">
            <div className="create-form">
                {activeStep == 0 ? (
                    <AccountDetailsForm
                        handleSelectChange={handleSelectChange}
                        handleRadioChange={handleRadioChange}
                        handleChange={handleChange}
                        user={userForm}
                        handleClickShowPassword={handleClickShowPassword}
                    />
                ) : null}
                {activeStep == 1 ? <PersonalDetailsForm handleChange={handleChange} handleSelectChange={handleSelectChange} user={userForm} /> : null}
                {activeStep == steps.length - 1 ? <ReviewForm user={userForm} handleClickShowPassword={handleClickShowPassword} /> : null}
                {activeStep == 2 && steps[2] == 'Demographic Info' ? <DemographicForm user={userForm} handleChange={handleChange} /> : null}
                {activeStep == 3 && steps[3] == 'Questionnaire' ? (
                    <QuestionnaireForm user={userForm} handleQuestionnaireChange={handleQuestionnaireChange} handleChange={handleChange} />
                ) : null}

                <div className="create-form-controls">
                    <Box sx={{ width: '100%' }}>
                        {matches ? (
                            <Stepper nonLinear activeStep={activeStep}>
                                {steps.map((label, index) => (
                                    <Step key={label} completed={completed[index]}>
                                        <StepButton color="inherit" onClick={handleStep(index)}>
                                            {label}
                                        </StepButton>
                                    </Step>
                                ))}
                            </Stepper>
                        ) : null}
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
                                            (completedSteps() === totalSteps() - 1 ? (
                                                <Button onClick={handleComplete}>Submit</Button>
                                            ) : (
                                                <Button onClick={handleComplete}>Complete Step</Button>
                                            ))}
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
