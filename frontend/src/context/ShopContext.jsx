import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10; // Set your delivery fee here
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(""); // User ID
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // Backend URL
  const navigate = useNavigate(); // Using useNavigate here

  // Fetch the cart items from the backend
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        { userId }, // Send the user ID with the request
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch cart data.");
      console.log(error);
    }
  };

  // Fetch the products
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch products.");
    }
  };

  // Get user token and cart data
  useEffect(() => {
    if (token) {
      getUserCart(token); // Fetch user cart data from the backend
    }
    getProductsData(); // Fetch products on load
  }, [token, userId]);

  // Add to cart functionality
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size.");
      return;
    }

    let cartData = { ...cartItems };

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { userId, itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  // Update quantity in cart
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = { ...cartItems };
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { userId, itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  // Calculate total cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        totalCount += cartItems[itemId][size];
      }
    }
    return totalCount;
  };

  // Calculate total cart amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const product = products.find((product) => product._id === itemId);
      if (product) {
        for (const size in cartItems[itemId]) {
          totalAmount += product.price * cartItems[itemId][size];
        }
      }
    }
    return totalAmount;
  };

  return (
    <ShopContext.Provider
      value={{
        setCartItems,
        currency,
        delivery_fee,
        cartItems,
        addToCart,
        updateQuantity,
        getCartCount,
        getCartAmount,
        products,
        setToken,
        token,
        setUserId,
        navigate, // Make sure navigate is accessible
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
