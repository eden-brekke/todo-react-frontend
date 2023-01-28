import React from 'react';
import './App.css';
import { Box } from '@mui/material';

import TaskList from './components/TaskList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Box>
    <Header />
    <TaskList />
    <Footer />
    </Box>
  );
}

export default App;
