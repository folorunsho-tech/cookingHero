import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import useFetch from "../Hooks/useFetch";
import FoodSection from "./FoodSection";

const Home = () => {
  const requests = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  const baseURL = "https://api.edamam.com/api/recipes/v2";
  const {
    data: mealData,
    loading: mealLoading,
    error: mealError,
  } = useFetch(baseURL, {
    type: "public",
    mealType: "breakfast",
    app_id: process.env.REACT_APP_RECIPE_APP_ID,
    app_key: process.env.REACT_APP_RECIPE_API_KEY,
  });
  const {
    data: dishData,
    loading: dishLoading,
    error: dishError,
  } = useFetch(baseURL, {
    type: "public",
    dishType: "bread",
    app_id: process.env.REACT_APP_RECIPE_APP_ID,
    app_key: process.env.REACT_APP_RECIPE_API_KEY,
  });
  const {
    data: cuisineData,
    loading: cuisineLoading,
    error: cuisineError,
  } = useFetch(baseURL, {
    type: "public",
    cuisineType: "american",
    app_id: process.env.REACT_APP_RECIPE_APP_ID,
    app_key: process.env.REACT_APP_RECIPE_API_KEY,
  });

  cuisineLoading === false && console.log([mealData, dishData, cuisineData]);
  const w = window.innerWidth;
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const dishTypes = [
    "Alcohol-cocktail",
    "Biscuits and cookies",
    "Bread",
    "Cereals",
    "Condiments and sauces",
    "Drinks",
    "Desserts",
    "Egg",
    "Main course",
    "Omelet",
    "Pancake",
    "Preps",
    "Preserve",
    "Salad",
    "Sandwiches",
    "Soup",
    "Starter",
  ];
  const cuisineTypes = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian",
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
      <FoodSection title="Saved Recipes" content={null} showOptions={false} />
      <FoodSection
        title="Meal Types"
        content={null}
        showOptions={true}
        options={mealTypes}
        loading={mealLoading}
      />
      <FoodSection
        title="Cuisine Types"
        content={null}
        showOptions={true}
        options={cuisineTypes}
        loading={cuisineLoading}
      />
      <FoodSection
        title="Dish Types"
        content={null}
        showOptions={true}
        options={dishTypes}
        loading={dishLoading}
      />
    </section>
  );
};

export default Home;
