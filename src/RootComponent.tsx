import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateUserForm from './components/CreateUserForm'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import UserDashboard from './pages/UserDashboard'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage/>} />
                <Route path={ROUTES.USER_DASHBOARD_ROUTE} element={<UserDashboard/>} />
                <Route path={ROUTES.CREATE_USER_ROUTE} element={<CreateUserForm/>} />
            </Routes>
        </Router>
    )
}

export default RootComponent
