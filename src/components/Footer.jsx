import React from 'react'
import {Typography, Link} from '@mui/material'

const Footer = () => {
  return (
    <Typography >
      {'Copyright © '}
      <Link color='inherit' href='https://eden-portfolio.vercel.app/'>
        Eden Brekke
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Footer