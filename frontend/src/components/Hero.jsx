import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border mt-8 border-[#001f3f]">
        {/*Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#001f3f]">
            <div className="flex items-center gap-2">
              <p className="jakarta-regular w-8 md:w-11 h-[2px] bg-[#ff6700]"></p>
              <p className="jakarta-regular font-medium text-sm md:text-base">
                Our Best Seller
              </p>
            </div>
            <h1 className="jakarta-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>
            <div className=" flex items-center gap-2">
              <NavLink
                to="/collection"
                className="flex flex-col cursor-pointer items-center gap-1 p-5 rounded-xl bg-[#ff6700] transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <p className="jakarta-regular font-semibold text-white">
                  SHOP NOW
                </p>
              </NavLink>
            </div>
          </div>
        </div>
        {/*Hero Right Side */}
        <img src={assets.hero_img} className="w-full sm:w-1/2" />
      </div>
      {/* Hero Title Section */}
      <div className="flex flex-col items-center mt-16 pt-10">
        {/* Hero Title Section */}
        <div className="text-[#001f3f] text-center">
          {/* Main Title with Two-tone Effect */}
          <h1 className="-z-10 relative jakarta-regular text-4xl sm:text-5xl lg:text-6xl mb-2">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#001f3f]">
              MODOO e-commerce
            </span>
            <span className="absolute inset-0 text-[#001f3f] font-black opacity-10">
              MODOO e-commerce
            </span>
          </h1>

          {/* Caption */}
          <p className="jakarta-regular text-lg mt-3 text-gray-600">
            Now everyone satisfied
          </p>
        </div>

        {/* Full-width Image Placeholder */}
        <img
          src={assets.hero_img2}
          className="w-full mt-12"
          alt="MODOO e-commerce"
        />
      </div>
    </div>
  );
};

export default Hero;
