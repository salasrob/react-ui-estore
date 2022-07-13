import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Dashboard from '../components/userDashboard/Dashboard'
import '../styles/userDashboard.sass'
import Footer from '../components/layout/Footer'

const UserDashboard: React.FC = () => {
  return (
    <>
    <Box className='userDashboard-wrapper'>
      <Sidebar/>
      <Dashboard/>
    </Box>
    <Footer/>
    </>
  )
}
export default UserDashboard

