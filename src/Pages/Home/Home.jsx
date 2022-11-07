import React from 'react';
import Appointment from './Appointment';
import Contact from './Contact';
import Header from './Header';

const Home = () => {
  return (
    <div className='lg:px-20'>
      <Header/>
      <Appointment></Appointment>
      <Contact/>
    </div>
  );
};

export default Home;<h1>This is home page</h1>