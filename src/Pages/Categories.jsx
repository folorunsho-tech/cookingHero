import React, { useState, useEffect } from "react";
import FoodSection from "../components/FoodSection";
import axios from "axios";
const Categories = () => {
  const [recipes, setRecipes] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [current, setCurrent] = useState("Beef");
  const [cuisine, setCuisine] = useState("American");
  const [loading, setLoading] = useState(true);
  const [cuisineLoading, setCuisineLoading] = useState(true);
  useEffect(() => {
    (async function () {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${current}`
      );
      setLoading(false);
      setRecipes(data.meals);
      setCurrent(current);
    })();
  }, [current]);
  useEffect(() => {
    (async function () {
      setCuisineLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
      );
      setCuisineLoading(false);
      setCuisines(data.meals);
      setCuisine(cuisine);
    })();
  }, [cuisine]);

  let cuisineList = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Dutch",
    "Egyptian",
    "French",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Jamaican",
    "Japanese",
    "Kenyan",
    "Malaysian",
    "Mexican",
    "Moroccan",
    "Polish",
    "Portuguese",
    "Russian",
    "Spanish",
    "Thai",
    "Tunisian",
    "Turkish",
    "Unknown",
    "Vietnamese",
  ];
  let catList = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];

  return (
    <section className="col-span-5 lg:mt-3 space-y-12">
      <FoodSection
        title="Recipe Categories"
        content={recipes}
        current={current}
        setCurrent={setCurrent}
        showOptions={true}
        options={catList}
        loading={loading}
      />
      <FoodSection
        title="Recipe Cuisines"
        content={cuisines}
        current={cuisine}
        setCurrent={setCuisine}
        showOptions={true}
        options={cuisineList}
        loading={cuisineLoading}
      />
    </section>
  );
};

export default Categories;
