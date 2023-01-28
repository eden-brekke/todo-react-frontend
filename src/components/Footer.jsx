import React from 'react'
import {Box, Typography, Link} from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{ 
            bgcolor: 'background.paper',
            p: 6,
          }}
      component='footer'
    >
    <Typography 
      variant='h6'
      align='center'
      gutterBottom
    >
      Thank you for visiting my project, here are the links to my socials.
    </Typography>
    <Typography
      variant='subtitle1'
      align='center'
      color='text.secondary'
      component='p'
    >
      <Link color='inherit' href='https://github.com/eden-brekke'> GitHub </Link>
      <Link color='inherit' href='https://www.linkedin.com/in/eden-brekke/'> LinkedIn </Link>
    </Typography>
    <Typography 
      variant='body2'
      color='text.secondary'
      align='center'
    >
      {'Copyright © '}
      <Link color='inherit' href='https://eden-portfolio.vercel.app/'>
        Eden Brekke
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Box>
  )
}

export default Footer