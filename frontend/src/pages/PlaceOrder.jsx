/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [method, setMethod] = useState("cod");
  const { navigate,token,cartItems,setCartItems,getCartAmount,delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData ] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = () => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      
      let orderItems = []

      for(const items in cartItems) {
        for(const item in cartItems[items]){
          if (cartItems[items][item]>0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        //API calls for COD

        case "cod":
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}})
          
          
          if(response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break;

        case 'stripe' :

          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, {headers:{token}})

          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }

        break;

        case 'razorpay':

          const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, {headers:{token}})
          if (responseRazorpay.data.success) {
            console.log(responseRazorpay.data.order);
            
          }

        break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col md:flex-row justify-between gap-4 pt-5 sm:pt-14 sm:min-h-[80vh] border-t">
      {/*--- Left Side --- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>

        {/* Input Fields */}
        <div className="flex gap-3">
          <input
            type="text"
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            placeholder="First name"
            className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            placeholder="Last name"
            className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <input
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          placeholder="Email Address"
          className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          placeholder="Street"
          className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
        />

        <div className="flex gap-3">
          <input
            type="text"
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            placeholder="City"
            className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            placeholder="State"
            className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <div className="flex gap-3">
          <input
            type="number"
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            placeholder="Zipcode"
            className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            placeholder="Country"
            className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <input
          type="text"
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          className="border border-[#001f3f] rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/*--- Right Side --- */}
      <div className="mt-8">
        <div className="mt-8 min-w-96">
          <CartTotal />
        </div>

        {/* Payment Methods */}
        <div className="mt-12">
          <Title text1={"Payment"} text2={"Methods"} />

          <div className="flex gap-4 flex-col lg:flex-row">
            {/* Stripe Payment Option */}
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer transition ${
                method === "stripe" ? "border-[#ff6700]" : "border-gray-300"
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-[#ff6700]" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>

            {/* Cash on Delivery Option */}
            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer transition ${
                method === "cod" ? "border-[#ff6700]" : "border-gray-300"
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-[#ff6700]" : ""
                }`}
              ></p>
              <p className="text-gray-700 text-base font-bold mx-4">
                Cash on Delivery
              </p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-[#ff6700] hover:bg-[#001f3f] text-white transition-colors px-16 py-2 text-lg font-bold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
