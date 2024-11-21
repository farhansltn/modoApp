import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency, products } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="cursor-pointer">
      <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 duration-700 ease-in-out">
        {/* Product Image with hover effect */}
        <div className="overflow-hidden">
          <img
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
            src={image[0]}
            alt={name}
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="jakarta-bold text-md font-black text-gray-900 group-hover:text-[#ff6700] transition-colors duration-1000">
            {name}
          </p>
          <p className="jakarta-regular text-sm font-medium text-gray-600">
            {currency}
            {price}
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-28 bg-[#ff6700] flex items-center justify-center text-white font-bold uppercase text-sm transition-all duration-700 ease-in-out overflow-hidden">
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Add to Cart
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
