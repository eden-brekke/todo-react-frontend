import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import Main from './components/Main';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'




function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
    </ThemeProvider>
  );
}

export default App;
