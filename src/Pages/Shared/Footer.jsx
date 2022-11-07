import React from 'react';
import logo from '../../logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer lg:p-20 bg-neutral text-black">
        <div className='flex flex-col items-center'>
          <img className='h-14' src={logo} alt="Logo" />
          <p><span className='text-info font-bold text-2xl'>SaaD Dentistry</span><br />Providing reliable dental care since 2012</p>
        </div>
        <div>
          <span className="footer-title text-info">Services</span>
          <a href="/" className="link link-hover">Dental Root Canal</a>
          <a href="/" className="link link-hover">Teeth Whitening</a>
          <a href="/" className="link link-hover">Crowns Bridges</a>
          <a href="/" className="link link-hover">Dental Implants</a>
        </div>
        <div>
          <span className="footer-title text-info">Explore</span>
          <a href="/" className="link link-hover">About us</a>
          <a href="/" className="link link-hover">Contact</a>
          <a href="/" className="link link-hover">Blog</a>
          <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div>
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