import React from 'react'
import { Typography, Link } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-container-links">
                <Link component={"a"} underline="hover" color="inherit" href="/">About us</Link>
                <Link component={"a"} underline="hover" color="inherit" href="/">Privacy policy</Link>
                <Link component={"a"} underline="hover" color="inherit" href="/">Terms of use</Link>
            </div>
            <div className="footer-container-copyright">
                <Typography variant="body2" color="inherit">
                    {"Copyright © "}
                    <Link component={"a"} underline="hover" color="inherit" href="https://github.com/salasrob">
                    Robert Salas
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {". All Rights Reserved"}
                </Typography>
            </div>
        </div>
    </footer>
  )
}
export default Footer