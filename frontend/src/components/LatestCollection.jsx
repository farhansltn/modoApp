import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]); // Added products dependency to ensure update on data change.

  return (
    <div className="my-10">
      {/* Title Section */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="jakarta-regular w-3/4 m-auto text-sm md:text-xl text-gray-600">
          Discover our newest fashion collection and elevate your style! Shop
          the latest trends and make a statement with fresh, bold looks. Don’t
          wait—grab your favorites now and be the first to own the season’s
          must-haves!
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-8 px-4 sm:px-8">
        {latestProducts.map((item, index) => (
          <div key={index} className="relative group">
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            {/* New Badge */}
            {index === 0 && (
              <span className="absolute top-2 left-2 bg-[#ff6700] text-white text-xs font-semibold py-1 px-2 rounded-lg">
                New
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
