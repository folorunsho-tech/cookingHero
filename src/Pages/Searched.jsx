import React from "react";
import { Redirect } from "react-router";
import Home from "../components/Home";
const Searched = () => {
  return (
    <section>
      <Redirect
        to={{
          pathname: "/search",
          search: "?utm=your+face",
          state: { referrer: Home },
        }}
      />
    </section>
  );
};

export default Searched;
