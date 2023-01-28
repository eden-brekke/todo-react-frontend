import React from 'react'

import TaskList from './TaskList';
import Header from './Header';
import Footer from './Footer';
import HeroBanner from './HeroBanner';

const Main = () => {
  return (
    <>
    <Header />
    <HeroBanner />
    <TaskList />
    <Footer />
    </>
  )
}

export default Main