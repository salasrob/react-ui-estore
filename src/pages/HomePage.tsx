import React from 'react'
import DateDisplay from '../components/DateDisplay'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello Test  world!</h1>
            <DateDisplay />
            <LoginForm/>
            <Footer/>
        </div>
    )
}

export default HomePage
