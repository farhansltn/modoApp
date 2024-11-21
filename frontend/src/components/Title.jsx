import React from "react";

const Title = ({ text1, text2, className }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className={`jakarta-regular text-[#001f3f] ${className}`}>
        {text1} <span className="text-[#ff6700] font-medium">{text2}</span>
      </p>
      <p className="jakarta-regular bg-[#001f3f] w-8 sm:w-12 h-[1px] sm:h-[2px]"></p>
    </div>
  );
};

export default Title;
