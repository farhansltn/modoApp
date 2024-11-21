/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null); // Initial state set to null
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  // Debugging: Check if products is available
  useEffect(() => {
    console.log("Products from context:", products);
  }, [products]);

  const fetchProductData = async () => {
    // Ensure products is an array and not empty
    if (Array.isArray(products) && products.length > 0) {
      const foundProduct = products.find((item) => item._id === productId); // Use find instead of map
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image[0]); // Set the first image as the default
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Debugging: Check productData and image
  useEffect(() => {
    console.log("Product data:", productData);
    console.log("Current image:", image);
  }, [productData, image]);

  return productData ? (
    <div className="pt-8 transition-opacity ease-in duration-1000 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full no-scrollbar">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product ${index}`} // Alt text for accessibility
                onClick={() => setImage(item)} // Set clicked image to main display
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-black text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-2 text-3xl font-light">
            {currency}
            {productData.price}
          </p>
          <p className="mt-2 text-[#001f3f95] md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`${item === size ? "bg-[#ff6700] font-black" : ""} px-4 py-2 text-white bg-[#001f3f] border rounded-2xl hover:bg-[#ff6700] hover:text-white transition-colors duration-500 ease-in-out `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-[#001f3f] text-white px-9 py-5 hover:bg-[#ff6700] font-black  transition-colors duration-500 ease-in-out"
          >
            Add to cart
          </button>
          <hr className="mt-4 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% brand new with box product</p>
            <p>Cash on delivery is available for this product</p>
            <p>Easy return and exchange policy within 12 days</p>
          </div>
        </div>
      </div>

      {/* ----Description & Review Section---- */}
      <div className="mt-10">
        {/* Tabs */}
        <div className="flex border-b-2 border-gray-300">
          {/* Description Tab */}
          <button
            className={`px-5 py-3 text-sm font-semibold ${
              activeTab === "description"
                ? "text-[#001f3f] border-b-4 border-[#ff6700]"
                : "text-gray-500 hover:text-[#001f3f]"
            } transition-colors duration-300 ease-in-out focus:outline-none`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          {/* Reviews Tab */}
          <button
            className={`px-5 py-3 text-sm ${
              activeTab === "reviews"
                ? "text-[#001f3f] border-b-4 border-[#ff6700]"
                : "text-gray-500 hover:text-[#001f3f]"
            } transition-colors duration-300 ease-in-out focus:outline-none`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (122)
          </button>
        </div>

        {/* Content Section */}
        <div className="border px-6 py-6 text-sm text-gray-500">
          {activeTab === "description" ? (
            <div className="flex flex-col gap-4">
              {/* Description Content */}
              <p className="leading-relaxed text-gray-700">
                This product features a sleek design and the latest in
                performance technology. Crafted with high-quality materials, it
                offers durability and comfort for everyday use.
              </p>
              <p className="leading-relaxed text-gray-700">
                Available in a variety of sizes and colors to suit every taste,
                this product is perfect for anyone who values both style and
                function.
              </p>
              <p className="leading-relaxed text-gray-700">
                Whether you're looking to upgrade your current setup or simply
                add something new to your collection, this product is an
                excellent choice.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Reviews Content */}
              <p className="leading-relaxed text-gray-700">
                Customer Reviews: <strong>4.5/5</strong> stars based on 122
                reviews.
              </p>
              <p className="leading-relaxed text-gray-700">
                "This product exceeded my expectations! The quality is fantastic
                and it's super comfortable to use." - <strong>John D.</strong>
              </p>
              <p className="leading-relaxed text-gray-700">
                "Definitely worth the price. Highly recommend!" -{" "}
                <strong>Jane S.</strong>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Display Related Product */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;
