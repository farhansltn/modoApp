import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // Get the cart subtotal from the context function, default to 0 if undefined or NaN
  const cartSubtotal = getCartAmount() ?? 0; // Use nullish coalescing to ensure it's a number
  const cartTotal =
    cartSubtotal === 0 ? 0 : (cartSubtotal + delivery_fee).toFixed(2);

  return (
    <div className="w-full py-6">
      <div className="text-xl">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        {/* Subtotal */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {cartSubtotal.toFixed(2)}{" "}
            {/* Ensure cartSubtotal is a valid number */}
          </p>
        </div>
        <hr />

        {/* Shipping Fee */}
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {/* Ensure delivery_fee is a valid number */}
            {cartSubtotal === 0 ? "0.00" : (delivery_fee ?? 0).toFixed(2)}
          </p>
        </div>
        <hr />

        {/* Total */}
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {cartTotal}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
