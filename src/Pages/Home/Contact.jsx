import React from 'react';
import icon1 from '../../Assets/Icons/contact/calender.png';
import icon2 from '../../Assets/Icons/contact/phone.png';
import icon3 from '../../Assets/Icons/contact/location.png';
import icon from '../../Assets/Icons/logo.png';

const Contact = () => {
  return (
    <div className=' bg-neutral pb-20 text-info rounded-lg my-20'>
      <div className='py-10'>
        <h1 className='text-3xl font-bold'>Contact with me</h1>
        <img className='h-6 mx-auto my-2' src={icon} alt="" />
      </div>
      <div className='flex justify-around'>
        <div className='flex items-center'>
          <div><img src={icon1} alt="" className='mr-4 h-14' /></div>
          <div className='text-left'>
            <h5 className='text-lg'>Monday-Friday</h5>
            <h2 className='text-3xl'>9:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className='flex items-center'>
          <div><img src={icon2} alt="" className='mr-4 h-14' /></div>
          <div className='text-left'>
            <h5 className='text-lg'>Emergency Phone</h5>
            <h2 className='text-3xl'>+2546 251 2658</h2>
          </div>
        </div>
        <div className='flex items-center'>
          <div><img src={icon3} alt="" className='mr-4 h-14' /></div>
          <div className='text-left'>
            <h5 className='text-lg'>Address</h5>
            <h2 className='text-3xl'>San Francisco, Canada</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;