import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify"; // Import toastify for confirmation
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import CartTotal from "../components/CartTotal";
import CustomToast from "../components/CustomToast";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleQuantityChange = (itemId, size, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, size, newQuantity);
    }
  };

  const handleDelete = (itemId, size) => {
    toast(<CustomToast onConfirm={() => updateQuantity(itemId, size, 0)} />, {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      position: "top-center",
    });
  };

  const handleCheckout = () => {
    toast(
      <CustomToast
        onConfirm={() => {
          toast.success("Proceeding to Checkout...");
          setTimeout(() => {
            navigate("/place-order");
          }, 1000);
        }}
      />,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        position: "top-center",
      }
    );
  };

  return (
    <div className="border-t pt-14 bg-gray-50 px-5 sm:px-10">
      <div className="text-2xl mb-3 text-[#001f3f]">
        <Title text1={"Your"} text2={"Cart"} />
      </div>

      {cartData.length > 0 ? (
        <div className="space-y-4">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            // Skip rendering if product data is not found
            if (!productData) {
              console.warn(
                `Product with ID ${item._id} not found in products list.`
              );
              return null;
            }

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 sm:p-6 grid grid-cols-[4fr_1.5fr_1fr_1fr] items-center gap-4"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={productData.image[0]}
                    alt={productData.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-semibold text-[#001f3f]">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-[#001f3f96]">
                      <p className="text-sm font-medium">
                        {currency}
                        {productData.price}
                      </p>
                      <p className="text-xs font-bold text-white bg-[#ff6700] px-3 py-1 rounded-xl">
                        Size: {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm font-medium text-[#001f3f] mb-1">
                    Quantity:
                  </p>
                  <input
                    type="number"
                    className="border border-gray-300 w-12 sm:w-16 text-center py-1 rounded-md"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item._id,
                        item.size,
                        parseInt(e.target.value)
                      )
                    }
                  />
                </div>

                <div className="text-center text-sm sm:text-base font-semibold text-gray-800">
                  {currency}
                  {(productData.price * item.quantity).toFixed(2)}
                </div>

                <div className="text-center">
                  <img
                    onClick={() => handleDelete(item._id, item.size)}
                    src={assets.bin_icon}
                    className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition-transform"
                    alt="Remove"
                  />
                </div>
              </div>
            );
          })}
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={handleCheckout}
              className="bg-[#ff6700] text-white text-md font-black my-8 px-8 py-3"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="p-20">
          <p className="text-center text-xl text-gray-600">
            Your cart is empty.
          </p>
          <CartTotal />
        </div>
      )}
    </div>
  );
};

export default Cart;
