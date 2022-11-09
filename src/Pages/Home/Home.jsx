import React from 'react';
import useTitle from '../../hooks/useTitle';
import Appointment from './Appointment';
import Contact from './Contact';
import Header from './Header';
import Services from './Services';

const Home = () => {
  useTitle('Home');
  return (
    <div className='lg:px-20'>
      <Header/>
      <Services/>
      <Appointment></Appointment>
      <Contact/>
    </div>
  );
};

export default Home;<h1>This is home page</h1>