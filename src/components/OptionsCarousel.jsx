import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../Styles/app.css";
const OptionsCarousel = ({ options }) => {
  const [current, setCurrent] = useState();

  useEffect(() => {
    const isMatched = () => {
      setCurrent(window.location.hash);
    };
    isMatched();
  }, [window.location.hash]);

  return (
    <section className="flex gap-3 px-4 py-4 overflow-x-auto w-full">
      {options.map((option) => {
        return (
          <NavLink
            key={option}
            style={{
              color: "white",
              backgroundColor: current === `#${option}` ? "red" : "blue",
            }}
            to={`/#${option}`}
            className="cursor-pointer w-max hover:bg-red-600 transition rounded-full py-1 px-4 duration-300 ease-in-out bg-blue-600 text-white"
          >
            {option}
          </NavLink>
        );
      })}
    </section>
  );
};

export default OptionsCarousel;
