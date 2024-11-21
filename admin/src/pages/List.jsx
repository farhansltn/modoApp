import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products); // Update this to match the actual data structure
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        {
          id,
        },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/**--------List Table Title-------- */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b className="text-center">Image</b>
          <b className="text-center">Name</b>
          <b className="text-center">Category</b>
          <b className="text-center">Price</b>
          <b className="text-center">Action</b>
        </div>

        {/**-----------Product List ---------- */}

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border-b text-sm"
          >
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-16 h-16 object-cover"
            />
            <p className="text-center">{item.name}</p>
            <p className="text-center">{item.category}</p>
            <p className="text-center">
              {currency}
              {item.price}
            </p>
            <button
              onClick={() => removeProduct(item._id)}
              className="text-center text-red-500"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
