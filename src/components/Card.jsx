import React from "react";
import { IoIosTimer } from "react-icons/io";
import { BiDish } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

const Card = ({ content }) => {
  return (
    <div className="bg-white shadow-md rounded-xl sm:mb-6  w-60 relative">
      <MdFavoriteBorder className="text-xl absolute right-3 top-3 text-gray-100 cursor-pointer" />

      <img
        className="rounded-t-xl object-cover w-full h-48"
        src="https://www.edamam.com/web-img/36b/36be4fd2cbb2dafacf722da53d7de6da.jpg"
        alt="Smoothy"
      />
      <div className="py-4 px-3 space-y-3 cursor-pointer">
        <h2 className="text-md font-semibold text-left">
          Udon with chicken and Garlic Peanut Dressing
        </h2>
        <p className="text-sm font-medium text-gray-600 truncate">
          Udon with chicken and Garlic Peanut Dressing great recipe
        </p>
      </div>
      <div className="px-4 py-2 flex justify-between items-center">
        <p className="flex items-center gap-2 text-gray-400 text-sm ">
          <IoIosTimer className="text-blue-900" size="1.3rem" /> 3hrs
        </p>
        <p className="flex items-center gap-2 text-gray-400 text-sm ">
          <BiDish className="text-blue-900" size="1.3rem" /> 3
        </p>
      </div>
      <div className="flex justify-between items-center px-3 py-4">
        <button className="bg-red-600 p-1 px-3 text-sm text-white rounded-full transition duration-300 ease-in hover:bg-blue-900">
          View Recipe
        </button>
        <button className="flex items-center gap-2 text-blue-900 transition duration-300 ease-in hover:text-blue-600">
          <AiOutlineShareAlt className="font-bold" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Card;
