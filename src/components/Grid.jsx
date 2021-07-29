import React from "react";

const Grid = (props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-4 lg:grid-cols-4 justify-items-center">
      {props.children}
    </section>
  );
};

export default Grid;
