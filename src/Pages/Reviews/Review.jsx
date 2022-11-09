import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({review}) => {
  const { name, image, rating, text } = review;
  return (
    <div className="mt-5 container flex flex-col p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-neutral dark:black">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img src={image} alt="User" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <span className="text-xs dark:text-black">2 days ago</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 dark:text-yellow-500">
          <FaStar />
          <span className="text-xl font-bold">{rating}</span>
        </div>
      </div>
      <div className="p-4 text-justify space-y-2 dark:text-black">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;