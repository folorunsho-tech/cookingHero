import React, { useState, useEffect } from "react";
import { RiSearch2Fill } from "react-icons/ri";
import FoodSection from "../components/FoodSection";
import axios from "axios";
const Home = () => {
  const w = window.innerWidth;
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [cuisine, setCuisine] = useState("American");
  const [cuisineLoading, setCuisineLoading] = useState(true);

  const [recipes, setRecipes] = useState([]);
  const [current, setCurrent] = useState("Beef");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${current}`
      );
      setLoading(false);
      setRecipes(data.meals.splice(0, 6));

      setCurrent(current);
    })();
  }, [current]);

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

  return (
    <section className="col-span-5 lg:mt-3 space-y-12">
      <header className="p-3 pr-4 space-y-4 max-w-full">
        {w < 1000 && (
          <div className="flex justify-between items-center bg-blue-500 p-5 rounded-lg ">
            <h2 className="cursor-pointer text-white">CookingHero</h2>
            <p className="text-red-300 text-md cursor-pointer">Log Out</p>
          </div>
        )}
        <div className="flex justify-between items-center bg-white py-2 pr-1 pl-4 rounded-full shadow">
          <input
            type="search"
            className="outline-none w-full"
            placeholder="search for a recipe"
          />
          <button className=" bg-blue-900 p-2 rounded-full text-red-600 transition duration-200 ease-in-out mr-2 hover:bg-red-600 hover:text-blue-900 ">
            <RiSearch2Fill className="text-xl" />
          </button>
        </div>
      </header>
      <FoodSection
        title="Saved Recipes"
        content={recipes}
        showOptions={false}
        viewAll={`/favourites`}
        showViewAll={true}
        loading={loading}
      />

      <FoodSection
        title="Discover Recipes"
        content={recipes}
        current={current}
        setCurrent={setCurrent}
        showOptions={true}
        options={catList}
        showViewAll={false}
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
        showViewAll={false}
      />
    </section>
  );
};

export default Home;
