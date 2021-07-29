import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

const OptionsCarousel = ({ options }) => {
  return (
    <section className="flex gap-3 px-4 py-4 overflow-x-auto w-full">
      {options.map((option) => (
        <button
          key={option}
          className="cursor-pointer w-full hover:bg-red-600 transition rounded-full py-1 px-4 duration-300 ease-in-out bg-blue-600  text-white"
        >
          <p className="w-52">{option}</p>
        </button>
      ))}
    </section>
  );
};

export default OptionsCarousel;
