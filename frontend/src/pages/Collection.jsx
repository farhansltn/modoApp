/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  const sortProduct = () => {
    let fpCopy = filterProducts.slice(); // Create a copy of filtered products

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break; // Add break here to prevent fall-through

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break; // Add break here to prevent fall-through

      default:
        applyFilter(); // Apply the default filter (relevant)
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType, filterProducts]);

  return (
    <div className="flex flex-col lg:flex-row gap-1 sm:gap-10 pt-5 border-t">
      {/* Filter Option */}
      <div className="min-w-60 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="jakarta-bold my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            className={`h-5 ${showFilter ? "-rotate-90" : ""}`}
            src={assets.dropdown_icon}
          />
        </p>
        {/*Category filter */}
        <div
          className={`border border-gray-600 pl-5 py-3 mt-6 ${showFilter ? " " : "hidden"}`}
        >
          <p className="mb-3 text-sm font-medium jakarta-regular">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="jakarta-regular flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Men"}
              />
              Men
            </p>
            <p className="jakarta-regular flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Woman"}
              />
              Woman
            </p>
            <p className="jakarta-regular flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Kids"}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Subcategory Filter */}
        <div
          className={`border border-gray-600 pl-5 py-3 mt-6 ${showFilter ? " " : "hidden"}`}
        >
          <p className="mb-3 text-sm font-medium jakarta-regular">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="jakarta-regular flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="jakarta-regular flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="jakarta-regular flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}

      <div className="flex-1">
        <div className="flex justify-between text-sm lg:text-base mb-8 mt-10 sm:mt-2">
          <Title
            className="text-3xl"
            text1={"Various Clothes "}
            text2={"Collections"}
          />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="jakarta-regular border-2 border-gray-400 text-sm px-2 py-1 rounded-lg focus:outline-none focus:border-[#ff6700] focus:ring-2 focus:ring-[#ff6700] transition-colors duration-300 ease-in-out hover:border-[#001f3f]"
          >
            <option className="jakarta-regular" value="relevant">
              Sort by: Relevant
            </option>
            <option className="jakarta-regular" value="low-high">
              Sort by: Low to High
            </option>
            <option className="jakarta-regular" value="high-low">
              Sort by: High to Low
            </option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
