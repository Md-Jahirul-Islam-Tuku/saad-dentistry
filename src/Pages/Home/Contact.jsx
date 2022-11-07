import React from 'react';
import icon1 from '../../Assets/Icons/contact/calender.png';
import icon2 from '../../Assets/Icons/contact/phone.png';
import icon3 from '../../Assets/Icons/contact/location.png';

const Contact = () => {
  return (
    <div className='flex justify-around bg-info py-20 text-white rounded-lg my-20'>
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
  );
};

export default Contact;