import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 mt-20">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14 text-sm px-4">
        {/* Logo and Copyright Section */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Modoo Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            © 2024 Modoo.LTD. All rights reserved.
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <p className="text-xl font-black mb-5">
            MODOO
            <span className="text-xl font-extrabold text-[#ff6700]">.LTD</span>
          </p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink to="/" className="flex flex-col gap-1">
              <p className="">HOME</p>
            </NavLink>
            <NavLink to="/collection" className="flex flex-col gap-1">
              <p className="">COLLECTION</p>
            </NavLink>
            <NavLink to="/about" className="flex flex-col gap-1">
              <p className="">ABOUT</p>
            </NavLink>
            <NavLink to="/contact" className="flex flex-col gap-1">
              <p className="">CONTACT</p>
            </NavLink>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-xl font-medium mb-5">Contact Us</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              className=">Email: support@modoo.com</li>
            <li className="
            >
              Phone: +123-456-7890
            </li>
            <li
              className=">Address: 123 Fashion St, NY</li>
            <li className="
            >
              Business Hours: Mon - Fri, 9am - 6pm
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
