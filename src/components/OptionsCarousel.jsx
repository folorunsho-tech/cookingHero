import React from "react";

import "../Styles/app.css";
const OptionsCarousel = ({ options, setCurrent, current }) => {
  return (
    <section className="flex gap-3 px-4 py-4 overflow-x-auto w-full">
      {options.map((option) => {
        return (
          <button
            key={option}
            style={{ background: current === option ? "red" : "blue" }}
            to={`/:${option}`}
            onClick={() => {
              setCurrent(option);
            }}
            exact
            strict
            className="cursor-pointer w-max hover:bg-red-600 transition rounded-full py-1 px-4 duration-300 ease-in-out bg-blue-600 text-white"
          >
            {option}
          </button>
        );
      })}
    </section>
  );
};

export default OptionsCarousel;
