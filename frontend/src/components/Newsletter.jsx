import React from "react";

const Newsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center p-8 bg-[#ff6700]">
      <p className="jakarta-bold text-3xl font-medium text-gray-100">
        Get 30% off on all items for our subscribers!
      </p>
      <p className="jakarta-regular text-gray-100 mt-3 text-lg">
        Subscribe now to receive exclusive deals, early access to new
        collections, and much more. Don't miss out on your chance to save big!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="mt-4 w-full sm:flex-1 flex items-center mx:auto my-5 pl-3"
      >
        <input
          className="jakarta-regular w-full sm:flex-1 outline-none p-3 focus:border-[1.5px] focus:border-[#001f3f] transition-all duration-200"
          type="email"
          placeholder="Please enter your email"
          required
        />
        <button
          type="submit"
          className="jakarta-bold bg-[#001f3f] text-white text-xs py-4 px-24"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
