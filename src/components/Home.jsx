import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import useFetch from "../Hooks/useFetch";
import FoodSection from "./FoodSection";

const Home = () => {
  const w = window.innerWidth;
  const { data, error, loading } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let catList = [];
  if (data === null) {
    console.log("loading");
  } else {
    data.categories.forEach((cat) => {
      catList.push(cat.strCategory);
    });
    catList = catList.sort();
  }

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
        title="Discover Recipes"
        content={null}
        showOptions={true}
        options={catList}
        loading={loading}
      />
    </section>
  );
};

export default Home;
