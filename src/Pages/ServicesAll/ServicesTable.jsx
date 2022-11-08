import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesTable = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="overflow-x-auto col-span-1 mr-5">
      <h1 className='text-3xl font-bold text-info my-4'>All services</h1>
      <table className="table w-full z-0">
        <tbody>
          {
            services.map(service => {
              return (
                <tr>
                  <Link to={`/services/${service._id}`} ><button className='bg-accent w-full text-left text-white p-4 rounded-lg mb-1 font-semibold text-xl'>{service.title}</button></Link>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;