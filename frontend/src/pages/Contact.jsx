import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletter from "../components/Newsletter";

const Contact = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      {/* Contact Info Section */}
      <div className="my-10 flex flex-col md:flex-row gap-10 items-center mb-28">
        {/* Contact Image */}
        <img
          className="md:w-[480px] w-full rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Store Information */}
        <div className="flex flex-col justify-center items-start gap-6 text-lg text-gray-600">
          <div>
            <p className="font-semibold text-xl">Our Store</p>
            <p>
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p>(+123)-456-7890</p>
          </div>
          <div>
            <p className="font-semibold text-xl">
              Careers at Modoo Fashion Retail
            </p>
            <p className="text-gray-500">
              Join our passionate team! Explore our latest job opportunities to
              grow with us.
            </p>
          </div>

          {/* Job Button */}
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Contact;
