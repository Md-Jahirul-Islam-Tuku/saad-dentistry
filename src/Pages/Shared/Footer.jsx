import React from 'react';
import logo from '../../logo.png'

const Footer = () => {
  return (
    <div className='mt-10 md:mt-0'>
      <footer className="justify-around footer py-10 lg:p-20 bg-neutral text-black md:p-10">
        <div className='flex flex-col items-center mx-auto md:mx-0'>
          <img className='h-8 md:h-10 lg:h-14' src={logo} alt="Logo" />
          <p className='text-lg font-semibold'><span className='text-info font-bold text-3xl'>SaaD Dentistry</span><br />Providing reliable dental<br/>Care since 2012</p>
        </div>
        <div className='hidden md:flex flex-col'>
          <span className="footer-title text-info">Services</span>
          <a href="/" className="link link-hover">Dental Root Canal</a>
          <a href="/" className="link link-hover">Teeth Whitening</a>
          <a href="/" className="link link-hover">Crowns Bridges</a>
          <a href="/" className="link link-hover">Dental Implants</a>
        </div>
        <div className='hidden md:flex flex-col'>
          <span className="footer-title text-info">Explore</span>
          <a href="/" className="link link-hover">About us</a>
          <a href="/" className="link link-hover">Contact</a>
          <a href="/" className="link link-hover">Blog</a>
          <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div className='hidden lg:flex flex-col'>
          <span className="footer-title text-info">Legal</span>
          <a href="/" className="link link-hover">Terms of use</a>
          <a href="/" className="link link-hover">Privacy policy</a>
          <a href="/" className="link link-hover">FAQ</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;