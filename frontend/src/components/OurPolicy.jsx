import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-center gap-14 text-center py-11 text-cs sm:text-sm md:text-base text-[#001f3f]">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
        <p className="jakarta-semibold">Easy Exchange Policy</p>
        <p className="jakarta-regular text-[#ff6700]">
          We offer hassle free exchange policy
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" />
        <p className="jakarta-semibold">12 Days return Policy</p>
        <p className="jakarta-regular text-[#ff6700]">
          We provide a secure and free return policy
        </p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" />
        <p className="jakarta-semibold">Quality customer support</p>
        <p className="jakarta-regular text-[#ff6700]">
          We make sure that our customers have support when needed
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
