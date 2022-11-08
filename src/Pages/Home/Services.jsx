import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <div className='pt-20'>
        <h1 className='text-left text-3xl text-accent'>Committed to</h1>
        <div className='flex justify-between items-center'>
          <h1 className='text-5xl text-info font-bold'>Excellence</h1>
          <Link to="/services" ><button className='btn btn-info shadow-md text-white hover:bg-gradient-to-r from-info to-accent border-0'>View All Services <FaAngleDoubleRight className='ml-3' /></button></Link>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5 my-10'>
        {
          services.map(service => <ServiceCard key={service._id} info={service} />).slice(0, 3)
        }
      </div>
    </div>
  );
};

export default Services;