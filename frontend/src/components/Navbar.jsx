import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img
          onClick={() => (token ? null : navigate("/login"))}
          src={assets.logo}
          className="w-40"
          alt="logo"
        />
      </Link>
      <ul className="hidden md:flex gap-5 text-sm text-[#001f3f]">
        <NavLink
          to="/"
          className="jakarta-regular flex flex-col items-center gap-1"
        >
          <p className="jakarta-regular font-semibold">HOME</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-[#ff6700] hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="jakarta-regular font-semibold">COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-[#ff6700] hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="jakarta-regular font-semibold">ABOUT</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-[#ff6700] hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="jakarta-regular font-semibold">CONTACT</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-[#ff6700] hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          className="w-7 cursor-pointer"
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
        />
        {/**Dropdown */}

        <div className="group relative">
          <Link to="/login">
            <img
              className="w-7 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-[#001f3f] text-[#ff6700]">
                <Link to='/profile'>
                  <p className="jakarta-regular cursor-pointer text-center hover:text-[#001f3f] hover:bg-[#ff6700]">
                    My Profile
                  </p>
                </Link>
                <Link to='/orders'>
                  <p className="jakarta-regular cursor-pointer text-center hover:text-[#001f3f] hover:bg-[#ff6700]">
                    Orders
                  </p>
                </Link>
                <p
                  onClick={logout}
                  className="jakarta-regular cursor-pointer text-center hover:text-[#001f3f] hover:bg-[#ff6700]"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-8 min-w-8" />
          <p className="jakarta-regular absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#001f3f] text-[#ff6700] aspect-square rounded-full text-[8px] font-semibold">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-7 cursor-pointer md:hidden"
        />
      </div>

      {/* Sidebar Menu for small screen*/}
      <div
        className={`jakarta-bold absolute top-0 right-0 bottom-0 overflow-hidden bg-[#001f3f] text-[#ff6700] transition-all ${visible ? "w-3/4" : "w-0"}`}
      >
        <div className="flex flex-col text-white">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-6" />
            <p className="text-lg">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-5 text-lg text-center border-opacity-65 border-[#ff6700] border-y"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-5 text-lg text-center border-opacity-65 border-[#ff6700] border-y"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-5 text-lg text-center border-opacity-65 border-[#ff6700] border-y"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-5 text-lg text-center border-opacity-65 border-[#ff6700] border-y"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
