import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const links = (
    <>
      <li className="text-base font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base font-medium">
        <NavLink to="/bills">My Bills</NavLink>
      </li>
      <li className="text-base font-normal">
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <footer className="footer footer-horizontal footer-center bg-[#1E293B] text-[#CBD5E1] rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex gap-5">{links}</ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" href="https://facebook.com">
            <FaFacebook size={25} />
          </a>
          <a target="_blank" href="https://youtube.com">
            <FaYoutube size={25}></FaYoutube>
          </a>
          <a target="_blank" href="https://x.com">
            <FaTwitter size={25}></FaTwitter>
          </a>
          <a target="_blank" href="https://instagram.com">
            <FaInstagram size={25}></FaInstagram>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <Link to='/' className="text-lg font-semibold">EasyBills</Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
