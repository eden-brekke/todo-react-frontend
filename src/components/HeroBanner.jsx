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
          Here you can find your own personal task list. You can add more items, you can edit existing items, you can delete items, and you can simple strikethrough them to show you've completed them.
        </Typography>
        <Stack
          sx={{
              pt:4
            }}
          direction='row'
          spacing={2}
          justifyContent='center'
        >
          <Button variant='contained'>Front end Source Code</Button>
          <Button variant='outlined'>Backend Source Code</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroBanner