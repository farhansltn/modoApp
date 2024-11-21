import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className=" bg-[#001f3f] text-center py-2">
      <div className="inline-flex items-center justify-between border-[1.5px] bg-white border-gray-300 px-5 py-2 my-5 mx-3 rounded-full w-2/4 transition-all duration-300 ease-in-out focus-within:border-[#ff6700]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm px-2 text-gray-700"
        />
        <img
          src={assets.search_icon}
          className="w-6 cursor-pointer hover:scale-105 transition-transform duration-200"
          alt="Search"
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-8 cursor-pointer ml-2 hover:rotate-90 transition-transform duration-200"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
