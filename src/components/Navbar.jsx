import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li className='text-base font-medium hover:text-[#60A5FA]'><NavLink to='/'>Home</NavLink></li>
        <li className='text-base font-medium'><NavLink to='/'>My Bills</NavLink></li>
        <li className='text-base font-normal'><NavLink to='/'>My Profile</NavLink></li>
    </>

    return (
        <div className="navbar  shadow-sm fixed top-0 left-0 w-full z-50 bg-[#1E3A8A] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">EasyBills</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <a className="btn bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white border-0">SignUp</a>
          <a className="btn bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white border-0">SignIn</a>
        </div>
      </div>
    );
};

export default Navbar;