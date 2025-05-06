import React from "react";
import { Link, NavLink } from "react-router";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const links = (
    <>
      <li className="text-base font-medium hover:text-[#60A5FA]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base font-medium hover:text-[#60A5FA]">
        <NavLink to="/">My Bills</NavLink>
      </li>
      <li className="text-base font-normal hover:text-[#60A5FA]">
        <NavLink to="/">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-[#1E3A8A] shadow-sm md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0}  className="btn btn-ghost lg:hidden text-white -ml-3">
            <IoMdMenu size={25}></IoMdMenu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a className="text-xl md:text-2xl font-bold text-white -ml-2 cursor-pointer hover:text-[#60A5FA]">EasyBills</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
          <Link to='/auth/signup' className="px-2 py-1 rounded-md md:px-4 md:py-2 text-sm md:text-base bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white border-0">SignUp</Link>
          <Link to='/auth/signin' className="px-2 py-1 rounded-md md:px-4 md:py-2 text-sm md:text-base bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white border-0">SignIn</Link>
        </div>
    </div>
  );
};

export default Navbar;
