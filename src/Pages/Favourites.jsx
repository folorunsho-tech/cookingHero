import React from "react";
import Card from "../components/Card";
import "../Styles/nav.css";

const Favourites = () => {
  return (
    <section className="space-y-8 py-8 w-full">
      <h2 className="text-xl">Your Favourite Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:grid-cols-4 w-max">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Favourites;
