import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ServiceDetails = () => {
  const { _id, title, img, rating, price, description } = useLoaderData();
  return (
    <div className="p-4 shadow-lg dark:bg-neutral dark:text-info mb-20 col-span-3">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a rel="noopener noreferrer" href="/" className="mb-0 capitalize font-semibold text-lg text-info">{title}</a>
        </div>
        <a rel="noopener noreferrer" href="/" className='font-semibold text-lg'>Price: ${price}</a>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="flex items-center text-xs">
            <span className='text-yellow-600 text-lg flex items-center'><FaStar className='mr-1' /> <span className='text-info font-semibold'>{rating}</span></span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-black text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;