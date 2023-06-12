import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black py-10'>
      <footer className="footer w-[90%] mx-auto">
        <div className='text-gray-400'>
          <p className="pb-2 text-gray-300 font-bold text-base">Services</p>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className='text-gray-400'>
          <p className="pb-2 text-gray-300 font-bold text-base">Company</p>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className='text-gray-400'>
          <p className="pb-2 text-gray-300 font-bold text-base">Legal</p>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;