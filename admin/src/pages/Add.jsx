import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]); // Array to store selected sizes

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller.toString()); // Convert to string
      formData.append("sizes", JSON.stringify(sizes)); // Convert array to JSON string

      // Append images if they are selected
      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      // Log the form data for debugging (inspect manually)
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form fields
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setBestseller(false);
        setSizes([]);
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className="space-y-6">
      {/* Upload Images Section */}
      <div className="flex flex-col w-full items-start gap-3">
        <p className="text-base font-medium">Upload Images</p>
        <div className="flex gap-3 py-4">
          {["image1", "image2", "image3", "image4"].map((image, index) => (
            <label htmlFor={image} key={index} className="cursor-pointer">
              <img
                className="w-20"
                src={
                  !eval(image)
                    ? assets.upload_area
                    : URL.createObjectURL(eval(image))
                }
                alt="Upload Image"
              />
              <input
                type="file"
                onChange={(e) =>
                  eval(`setImage${index + 1}`)(e.target.files[0])
                }
                id={image}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name Section */}
      <div className="w-full">
        <p className="text-base font-medium">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6700] transition duration-300"
          type="text"
          placeholder="Type Here"
          required
        />
      </div>

      {/* Product Description Section */}
      <div className="w-full py-2">
        <p className="text-base font-medium">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6700] transition duration-300"
          placeholder="Write the product description"
          required
        />
      </div>

      {/* Category, Sub-Category, and Price Section */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2 text-sm font-medium">Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6700] transition duration-300"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Sub Category</p>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6700] transition duration-300"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Price</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 sm:w-[120px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6700] transition duration-300"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      {/* Product Sizes Section */}
      <div>
        <p className="mb-2 text-base font-medium">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} onClick={() => toggleSize(size)}>
              <p
                className={`${
                  sizes.includes(size) ? "bg-slate-200" : "bg-black"
                } px-3 py-1 cursor-pointer rounded-md text-white`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox Section */}
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
        />
        <label className="cursor-pointer text-sm" htmlFor="bestseller">
          Add to best seller
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full max-w-[500px] mt-4 py-3 px-3 bg-[#001f3f] text-white font-medium rounded-xl hover:bg-[#ff6700] hover:text-black transition duration-300"
      >
        Add to Display
      </button>
    </form>
  );
};

export default Add;
