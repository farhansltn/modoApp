import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext); // Accessing products from context
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // Filter products where bestSeller is true (boolean comparison)
      const bestProduct = products.filter((item) => item.bestseller === true);
      setBestseller(bestProduct.slice(0, 4)); // Get the top 4 best sellers
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="jakarta-regular text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Seller"} />
        <p className="w-3/4 m-auto text-sm md:text-xl text-[#001f3f]">
          Check out our best-selling products that everyone’s talking about!
          Loved by our customers, these top picks are flying off the shelves.
          Get yours today before they're gone!
        </p>
      </div>

      {/* Check if there are best seller products */}
      {bestseller.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-5">
          {bestseller.map((item, index) => (
            <div
              key={index}
              className="group relative p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            >
              <ProductItem
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
              {/* Highlighting Best Seller with Theme Colors */}
              <div className="absolute top-2 right-2 bg-[#ff6700] text-white px-2 py-1 rounded-md">
                Best Seller
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center jakarta-bold text-lg text-[#001f3f]">
          No best sellers available at the moment.
        </p>
      )}
    </div>
  );
};

export default BestSeller;
