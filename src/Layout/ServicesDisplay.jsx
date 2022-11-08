import React from 'react';
import { Outlet } from 'react-router-dom';
import ServicesTable from '../Pages/ServicesAll/ServicesTable';

const ServicesDisplay = () => {
  return (
    <div className='grid grid-cols-4 lg:px-20 pt-32'>
      <ServicesTable />
      <Outlet/>
    </div>
  );
};

export default ServicesDisplay;