import React from 'react'
import { Box, Container, Typography, Stack, Button } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          Current Task List
        </Typography>
        <Typography
          variant='h5'
          align='center'
          color='text.secondary'
          paragraph
        >
          Here you can find my personal task list. At the moment there is no security, anyone who has access to this is using the same task list. <br/>
          Eventual goal is to set up user registration and have the experience tailored to each individual person using a database to store the different task lists.
        </Typography>
        <Stack
          sx={{
              pt:4
            }}
          direction='row'
          spacing={2}
          justifyContent='center'
        >
          <Button variant='contained' href='https://github.com/eden-brekke/todo-react-frontend' target='_blank'>Front end Source Code</Button>
          <Button variant='outlined' href='https://github.com/eden-brekke/todo-api-drf' target='_blank'>Backend Source Code</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroBanner