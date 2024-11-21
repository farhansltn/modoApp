import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-[1px] border-gray-200">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l border-r-0 transition-all duration-300 ${
              isActive
                ? "bg-[#ff6700] border-l-4 border-[#001f3f] text-white"
                : "border border-gray-500 text-gray-500"
            }`
          }
        >
          <img src={assets.add_icon} className="w-5 h-5" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l border-r-0 transition-all duration-300 ${
              isActive
                ? "bg-[#ff6700] border-l-4  border-[#001f3f] text-white"
                : "border border-gray-500 text-gray-500"
            }`
          }
        >
          <img src={assets.order_icon} className="w-5 h-5" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l border-r-0 transition-all duration-300 ${
              isActive
                ? "bg-[#ff6700] border-l-4 border-[#001f3f] text-white"
                : "border border-gray-500 text-gray-500"
            }`
          }
        >
          <img src={assets.order_icon} className="w-5 h-5" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
