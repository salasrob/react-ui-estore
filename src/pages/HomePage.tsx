import React from 'react'
import DateDisplay from '../components/DateDisplay'
import LoginForm from '../components/forms/login/LoginForm'
import Footer from '../components/Footer'
import logoSmall from '../assets/images/logoSmall.png'

const HomePage: React.FC = () => {

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={logoSmall} alt="Save A Warrior logo" />
            <DateDisplay />
            <LoginForm />
            <Footer />
        </div>
    )
}
export default HomePage
