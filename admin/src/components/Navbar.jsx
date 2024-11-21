import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <NavLink to="/">
        <img className="w-[max(17%,80px)]" src={assets.logo} alt="" />
      </NavLink>
      <button
        onClick={() => setToken("")}
        className="bg-[#001f3f] text-gray-100 px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
