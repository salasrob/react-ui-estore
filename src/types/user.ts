export type User = {
    username: string;
    cohort: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    showPassword: boolean;
    isSAWAlumni: boolean;
    applicantType: string;
    militaryStatus: string;
    firstResponderStatus: string;
    unitOrAgency: string;
    referredByAlumni: boolean;
    referrerName: string;
    referredByEntityName: string;

    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    phoneNumber: string;
    streetAddress: string;
    addressUnit: string;
    city: string;
    state: string;
    county: string;
    zip: string;
    country: string;

    ethnicBackground: string;
    highestLevelOfEducation: string;
    maritalStatus: string;
    numberOfChildrenInHome: string;
    annualHouseholdIncome: string;
    militaryBranchOrFirstResponderType: string;
};

export type Questionnaires = {
    substanceAbuse: Array<Question>;
    suicidalBehavioral: Array<Question>;
    patientHealth: Array<Question>;
    ptsMilitaryChecklist: Array<Question>
}

export type Question = {
    question:string;
    answer:string;
}

export interface Login {
    email: string;
    password: string;
    showPassword: boolean;
  }