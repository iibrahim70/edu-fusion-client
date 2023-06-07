import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, Logout } = useAuth();

  const handleLogout = () => {
    Logout()
      .then(() => { })
      .catch(err => console.log(err));
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = (
    <>
      <Link>Home</Link>
      <Link>Instructors</Link>
      <Link>Classes</Link>
      <Link>Dashboard</Link>
    </>
  );

  return (
    <nav className="shadow-2xl">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger Menu (for mobile) */}
          {isOpen && (
            <div className="md:hidden">
              <div className="shadow-2xl w-1/2 h-screen fixed top-0 left-0">
                <div className="flex items-center justify-end px-4 py-5">
                  <button
                    className="hover:text-gray-300 focus:outline-none focus:text-gray-300"
                    onClick={closeMenu}
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0607 12L4.53033 5.46967L5.46967 4.53033L12 11.0607L18.5303 4.53033L19.4697 5.46967L12.9393 12L19.4697 18.5303L18.5303 19.4697L12 12.9393L5.46967 19.4697L4.53033 18.5303L11.0607 12Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-lg font-medium flex flex-col gap-5 px-4 py-2">
                  {navItems}
                </div>
              </div>
            </div>
          )}

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-lg font-bold">Dressx</a>
          </div>

          {/* Hamburger Menu (for mobile) */}
          <div className="md:hidden">
            <button className="hover:text-gray-300 focus:outline-none focus:text-gray-300" onClick={toggleMenu}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6ZM6 16V8H18V16H6Z" />
                ) : (
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center">
            <div className="text-lg font-medium flex gap-5">
              {navItems}
            </div>
          </div>

          {/* Profile Picture */}
          {user ? (
            <div className="">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="Profile" />
                  </div>
                </label>
                <div className="mt-4 p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2 font-medium text-base">
                  <Link>
                    <a className="flex justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </Link>
                  <Link>Settings</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </div>
              </div>
            </div>
          ) : (
            <Link className='btn-primary' to='/signin'>Signin</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
