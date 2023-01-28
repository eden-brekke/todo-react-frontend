import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task'

const Header = () => {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <TaskIcon sx={{mr:2}} />
        <Typography>
            Task List
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header