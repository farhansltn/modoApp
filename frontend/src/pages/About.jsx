import React from "react";
import Title from "../components/Title"; // Adjust import based on your structure
import Slider from "../components/Slider";
import { slides } from "../data/sliderData.json";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title className="text-4xl" text1={"About"} text2={"Us"} />
      </div>

      {/* Full-width Slider Section */}
      <div className="my-8">
        <Slider data={slides} />
      </div>

      {/* About Us Section */}
      <div className="my-8 flex flex-col md:flex-row md:gap-8 gap-4">
        <div className="w-full py-5 text-lg text-justify">
          <p>
            Modoo Retail Company is an innovative player in the e-commerce and
            retail sector, focused on providing high-quality products across
            various categories, including fashion, electronics, home goods, and
            personal care.
          </p>
          <b className="text-gray-800 mt-6 block">Our Mission</b>
          <p className="mt-2">
            Our mission is to make premium products more accessible to a global
            audience while providing a seamless shopping experience. We strive
            to enhance the lives of our customers by offering superior products
            that reflect our values of quality, sustainability, and innovation.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-2xl py-8 text-center">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-20">
        {/* Quality Assurance */}
        <div className="border px-6 md:px-10 py-8 flex flex-col gap-5 bg-gray-50 rounded-md shadow-md">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Modoo Retail, we adhere to the highest quality standards. Every
            product goes through rigorous testing and quality checks before it
            reaches our customers. Our commitment to excellence ensures that you
            receive only the best, every time you shop with us.
          </p>
        </div>

        {/* Convenience */}
        <div className="border px-6 md:px-10 py-8 flex flex-col gap-5 bg-gray-50 rounded-md shadow-md">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shopping with Modoo Retail is easy and convenient. With a
            user-friendly website, multiple payment options, and fast shipping,
            we prioritize our customers' convenience at every step. Whether
            you're at home or on the go, our platform is accessible and designed
            to make your experience smooth and enjoyable.
          </p>
        </div>

        {/* Exceptional Customer Service */}
        <div className="border px-6 md:px-10 py-8 flex flex-col gap-5 bg-gray-50 rounded-md shadow-md">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our customer service team is dedicated to ensuring your
            satisfaction. We provide 24/7 support, so whether you have a
            question about an order or need help with a product, we’re always
            here to assist you. Our goal is to exceed your expectations with
            every interaction.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default About;
