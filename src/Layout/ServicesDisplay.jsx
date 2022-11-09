import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import ServicesTable from '../Pages/ServicesAll/ServicesTable';

const ServicesDisplay = () => {
  useTitle('All services')
  return (
    <div className='grid grid-cols-4 lg:px-20 pt-32'>
      <ServicesTable />
      <Outlet/>
    </div>
  );
};

export default ServicesDisplay;