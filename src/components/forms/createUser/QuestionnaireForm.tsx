import React from 'react'
import { FormControl, FormLabel, Box, Radio, FormControlLabel, RadioGroup, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { User, Questionnaires } from '../../../types/user'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Props = {
    handleQuestionnaireChange: (prop: keyof Questionnaires) => (event: React.ChangeEvent<HTMLInputElement>) => void
    handleChange: (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => void
    user: User
}
const QuestionnaireForm: React.FC<Props> = (props) => {
    return (
        <Box component={'form'} className="create-form-fields" autoComplete="off">
            <h1>Questionnaire</h1>
            <div className="create-form-input-wrapper">
                <div className="create-form-input-group">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Substance and Prescription Medication</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 12 MONTHS, how often have you used tobacco or any other nicotine delivery product (i.e., e-cigarette, vaping, or
                                    chewing tobacco)?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 12 MONTHS, how often have you used tobacco or any other nicotine delivery product (i.e., e-cigarette, vaping, or
                                    chewing tobacco)?">
                                    <FormControlLabel value="4" control={<Radio />} label="Daily or almost daily" />
                                    <FormControlLabel value="3" control={<Radio />} label="Weekly" />
                                    <FormControlLabel value="2" control={<Radio />} label="Monthly" />
                                    <FormControlLabel value="1" control={<Radio />} label="Less than monthly" />
                                    <FormControlLabel value="0" control={<Radio />} label="Never" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 12 MONTHS, how often have you had 5 or more drinks (men)/ 4 or more drinks (women) containing alcohol in one
                                    day?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 12 MONTHS, how often have you had 5 or more drinks (men)/ 4 or more drinks (women) containing alcohol in one
                                    day?">
                                    <FormControlLabel value="4" control={<Radio />} label="Daily or almost daily" />
                                    <FormControlLabel value="3" control={<Radio />} label="Weekly" />
                                    <FormControlLabel value="2" control={<Radio />} label="Monthly" />
                                    <FormControlLabel value="1" control={<Radio />} label="Less than monthly" />
                                    <FormControlLabel value="0" control={<Radio />} label="Never" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 12 MONTHS, how often have you used any prescription medications just for the feeling, more than prescribed or
                                    that were not prescribed for you?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 12 MONTHS, how often have you used any prescription medications just for the feeling, more than prescribed or
                                    that were not prescribed for you?">
                                    <FormControlLabel value="4" control={<Radio />} label="Daily or almost daily" />
                                    <FormControlLabel value="3" control={<Radio />} label="Weekly" />
                                    <FormControlLabel value="2" control={<Radio />} label="Monthly" />
                                    <FormControlLabel value="1" control={<Radio />} label="Less than monthly" />
                                    <FormControlLabel value="0" control={<Radio />} label="Never" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 12 MONTHS, how often have you used any drugs including marijuana, cocaine or crack, heroin, methamphetamine
                                    (crystal meth), hallucinogens, ecstasy/MDMA?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 12 MONTHS, how often have you used any drugs including marijuana, cocaine or crack, heroin, methamphetamine
                                    (crystal meth), hallucinogens, ecstasy/MDMA?">
                                    <FormControlLabel value="4" control={<Radio />} label="Daily or almost daily" />
                                    <FormControlLabel value="3" control={<Radio />} label="Weekly" />
                                    <FormControlLabel value="2" control={<Radio />} label="Monthly" />
                                    <FormControlLabel value="1" control={<Radio />} label="Less than monthly" />
                                    <FormControlLabel value="0" control={<Radio />} label="Never" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, did you smoke a cigarette containing tobacco or use any other nicotine delivery product (i.e.,
                                    e-cigarette, vaping or chewing tobacco)?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you smoke a cigarette containing tobacco or use any other nicotine delivery product (i.e.,
                                    e-cigarette, vaping or chewing tobacco)?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, did you usually smoke more than 10 cigarettes, vape, use an e-cigarette or chew tobacco more than 10
                                    times each day?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you usually smoke more than 10 cigarettes, vape, use an e-cigarette or chew tobacco more than 10
                                    times each day?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, did you usually smoke/use an e-cigarette, vape or chew tobacco within 30 minutes after waking?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you usually smoke/use an e-cigarette, vape or chew tobacco within 30 minutes after waking?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">In the PAST 3 MONTHS, did you have a drink containing alcohol?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you have a drink containing alcohol?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, did you have 5 or more drinks (men)/4 or more drinks (women) containing alcohol in a day?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you have 5 or more drinks (men)/4 or more drinks (women) containing alcohol in a day?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, have you tried and failed to control, cut down or stop drinking?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, have you tried and failed to control, cut down or stop drinking?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, has anyone expressed concern about your drinking?
                                </FormLabel>
                                <RadioGroup  onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, has anyone expressed concern about your drinking?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">In the PAST 3 MONTHS, did you use marijuana?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you use marijuana?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS have you had a strong desire or urge to use marijuana at least once a week or more often?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS have you had a strong desire or urge to use marijuana at least once a week or more often?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS have you had a strong desire or urge to use marijuana at least once a week or more often?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS have you had a strong desire or urge to use marijuana at least once a week or more often?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, did you use cocaine, crack, or methamphetamine (crystal meth)?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you use cocaine, crack, or methamphetamine (crystal meth)?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, did you use cocaine, crack, or methamphetamine (crystal meth) at least once a week or more often?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you use cocaine, crack, or methamphetamine (crystal meth) at least once a week or more often?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    In the PAST 3 MONTHS, has anyone expressed concern about your use of cocaine, crack or methamphetamine?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, has anyone expressed concern about your use of cocaine, crack or methamphetamine?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                In the PAST 3 MONTHS, did you use heroin?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you use heroin?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                In the PAST 3 MONTHS, have you tried to and failed to control, cut down or stop using heroin?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, have you tried to and failed to control, cut down or stop using heroin?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                In the PAST 3 MONTHS, has anyone expressed concern about your use of heroin?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, has anyone expressed concern about your use of heroin?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                In the PAST 3 MONTHS, did you use any other illegal or recreational drug (for example: ecstasy/molly, GHB, poppers, LSD, mushrooms, special K, bath salts, synthetic marijuana (spice), whip its, etc.)?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("substanceAbuse")} className="create-form-input" aria-labelledby="demo-radio-buttons-group-label" name="In the PAST 3 MONTHS, did you use any other illegal or recreational drug (for example: ecstasy/molly, GHB, poppers, LSD, mushrooms, special K, bath salts, synthetic marijuana (spice), whip its, etc.)?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Suicide Behavioral Questionnaire - Revised (SBQ-R)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Have you ever thought about attempting to kill yourself?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("suicidalBehavioral")} className="create-form-input"  name="Have you ever thought about attempting to kill yourself?">
                                    <FormControlLabel value="0" control={<Radio />} label="Never" />
                                    <FormControlLabel value="1" control={<Radio />} label="It was just a brief passing thought" />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio />}
                                        label="I have had a plan at least once to kill myself, but did not try to do it"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={<Radio />}
                                        label="I have had a plan at least once to kill myself, and really wanted to die"
                                    />
                                    <FormControlLabel value="4" control={<Radio />} label="I have attempted to kill myself, but did not want to die" />
                                    <FormControlLabel value="5" control={<Radio />} label="I have attempted to kill myself, and really hoped to die" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>How often have you thought about killing yourself in the past year?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("suicidalBehavioral")} className="create-form-input" name="How often have you thought about killing yourself in the past year?">
                                    <FormControlLabel value="0" control={<Radio />} label="Never" />
                                    <FormControlLabel value="1" control={<Radio />} label="Rarely (1 time)" />
                                    <FormControlLabel value="2" control={<Radio />} label="Sometimes (2 times)" />
                                    <FormControlLabel value="3" control={<Radio />} label="Often (3-4 times)" />
                                    <FormControlLabel value="4" control={<Radio />} label="Very Often (5 or more times)" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    How you ever told someone that you were going to commit suicide, or that you might do it?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("suicidalBehavioral")} className="create-form-input" name="How you ever told someone that you were going to commit suicide, or that you might do it?">
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                    <FormControlLabel value="1" control={<Radio />} label="Yes, at one time, but did not really want to die" />
                                    <FormControlLabel value="2" control={<Radio />} label="Yes at one time, and really wanted to die" />
                                    <FormControlLabel value="3" control={<Radio />} label="Yes, more than once but did not want to do it" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>How likley is it that you will attempt suicide someday?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("suicidalBehavioral")} className="create-form-input" name="How likley is it that you will attempt suicide someday?">
                                    <FormControlLabel value="0" control={<Radio />} label="Never" />
                                    <FormControlLabel value="1" control={<Radio />} label="No chance at all" />
                                    <FormControlLabel value="2" control={<Radio />} label="Rather unlikely" />
                                    <FormControlLabel value="3" control={<Radio />} label="Unlikely" />
                                    <FormControlLabel value="4" control={<Radio />} label="Likely" />
                                    <FormControlLabel value="5" control={<Radio />} label="Rather likely" />
                                    <FormControlLabel value="6" control={<Radio />} label="Very likely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Patient Health Questionnaire - Revised (PHQ-9)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Little interest or pleasure in doing things</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Little interest or pleasure in doing things">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Feeling down, depressed, or hopeless</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Feeling down, depressed, or hopeless">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Trouble falling or staying asleep, or sleeping too much</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Trouble falling or staying asleep, or sleeping too much">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Feeling tired or having little energy</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Feeling tired or having little energy">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Poor appetite or overeating</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Poor appetite or overeating">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Feeling bad about yourself - or that you are a failure or have let yourself or your family down
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Feeling bad about yourself - or that you are a failure or have let yourself or your family down">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Trouble concentrating on things, such as reading the newspaper or watching television
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Trouble concentrating on things, such as reading the newspaper or watching television">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Moving or speaking so slowly that other people could have noticed. Or ythe opposite - being so fidgety or restless that you
                                    have been moving around a lot more than usual
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Moving or speaking so slowly that other people could have noticed. Or ythe opposite - being so fidgety or restless that you
                                    have been moving around a lot more than usual">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Thoughts that you would be better off dead, or of hurting yourself</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("patientHealth")} className="create-form-input" name="Thoughts that you would be better off dead, or of hurting yourself">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="Several days" />
                                    <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
                                    <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>PTS Checklist - Military (PCL-M)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Repeated, distrubing memories, thoughts, or images of a stressful military experience?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Repeated, distrubing memories, thoughts, or images of a stressful military experience?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Repeated, distrubing dreams of a stressful military experience?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Repeated, distrubing dreams of a stressful military experience?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Suddenly acting or feeling as if a stressful military experience were happening again (as if you were reliving it)
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Suddenly acting or feeling as if a stressful military experience were happening again (as if you were reliving it)">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Feeling very upset when something reminded you of a stressful military experience?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Feeling very upset when something reminded you of a stressful military experience?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Having physical reactions (e.g. heart pounding, trouble breathing, sweating) when something reminded you of a stressful
                                    military experience?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Having physical reactions (e.g. heart pounding, trouble breathing, sweating) when something reminded you of a stressful
                                    military experience?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Avoiding thinking about or talking about a stressful military experience or avoiding having feelings related to it?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Avoiding thinking about or talking about a stressful military experience or avoiding having feelings related to it?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Avoiding activities or situations because they reminded you of a stressful military experience?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Avoiding activities or situations because they reminded you of a stressful military experience?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Trouble remembering important parts of a stressful military experience?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Trouble remembering important parts of a stressful military experience?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Loss of interest in activities that you used to enjoy?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Loss of interest in activities that you used to enjoy?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Feeling distant or cut off from other people?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Feeling distant or cut off from other people?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>
                                    Feeling emotionally numb or being unable to have loving feelings for those close to you?
                                </FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Feeling emotionally numb or being unable to have loving feelings for those close to you?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Feeling as if your future will somehow be cut short?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Feeling as if your future will somehow be cut short?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Trouble falling or staying asleep?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Trouble falling or staying asleep?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Feeling irritable or having angry outbursts?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Feeling irritable or having angry outbursts?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Having difficulty concentrating?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Having difficulty concentrating?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Being super-alert or watchful or on guard?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Being super-alert or watchful or on guard?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <AccordionDetails>
                            <FormControl>
                                <FormLabel>Feeling jumpy or easily startled?</FormLabel>
                                <RadioGroup onChange={props.handleQuestionnaireChange("ptsMilitaryChecklist")} className="create-form-input" name="Feeling jumpy or easily startled?">
                                    <FormControlLabel value="0" control={<Radio />} label="Not at all" />
                                    <FormControlLabel value="1" control={<Radio />} label="A little bit" />
                                    <FormControlLabel value="2" control={<Radio />} label="Moderately" />
                                    <FormControlLabel value="3" control={<Radio />} label="Quite a bit" />
                                    <FormControlLabel value="4" control={<Radio />} label="Extremely" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </Box>
    )
}

export default QuestionnaireForm
