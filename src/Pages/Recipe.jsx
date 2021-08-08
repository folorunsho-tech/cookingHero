import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
// import { IoIosTimer } from "react-icons/io";
// import { BiDish } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";
const Recipe = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setLoading(false);
      setRecipe(data.meals[0]);
    })();
  }, [id]);
  //   const numbers = [
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  //   ];

  return (
    <>
      {loading === true ? (
        <div className="mx-auto text-center">
          <VscLoading
            size="4rem"
            className="text-blue-600 mx-auto animate-spin"
          />
          <p className="text-center text-lg text-blue-500 mt-4">Loading...</p>
        </div>
      ) : (
        <section className="mx-3 my-4 max-w-4xl flex gap-4">
          <div className="space-y-4">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="bg-gray-300 rounded-xl max-w-2xl"
            />
            <h2 className="text-lg text-gray-900 font-semibold">
              {recipe.strMeal}
            </h2>
            {recipe.strMealThumb && (
              <div className="w-full">
                {recipe.strInstructions.split(". ").map((i) => (
                  <p className="mb-3" key={i}>
                    {i}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="fixed right-0 bg-gray-100 p-4 space-y-6 h-72 w-1/4 rounded-lg">
            <p>Category: {recipe.strCategory}</p>
            <p>Cuisine: {recipe.strArea}</p>
            <p>Tags: {recipe.strTags}</p>
            <p>Learn To Prepare this Recipe From Youtube:</p>

            {/* {recipe.strMealThumb &&
              numbers.forEach((number) => {
                if (
                  (recipe.strIngredient`${number}` !== "" || null) &&
                  (recipe.strMeasure`${number}` !== "" || null)
                ) {
                  return (
                    <>
                      <p>
                        {`${recipe.strIngredient}${[number]}`} :{" "}
                        {`${recipe.strMeasure}${[number]}`}
                      </p>
                      <p>
                        {recipe.strIngredient`${number}`} :{" "}
                        {recipe.strMeasure`${number}`}
                      </p>
                    </>
                  );
                }
              })} */}
            <div className="flex gap-2 text-sm ">
              <button className="bg-blue-600 font-semibold text-white p-1 px-3 rounded-full  cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out">
                <a href={recipe.strYoutube} target="_blank" rel="noreferrer">
                  Watch Video
                </a>
              </button>
              <button className="bg-red-600 font-semibold text-white p-1 px-3 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out">
                Delete From Favourites
              </button>
            </div>
            <h3>Ingredients :</h3>
            <div className="flex flex-wrap gap-2">
              <p> {recipe.strIngredient1},</p>
              <p> {recipe.strIngredient2},</p>
              <p> {recipe.strIngredient3},</p>
              <p> {recipe.strIngredient4},</p>
              <p> {recipe.strIngredient5},</p>
              <p> {recipe.strIngredient6},</p>
              <p> {recipe.strIngredient7},</p>
              <p> {recipe.strIngredient8},</p>
              <p> {recipe.strIngredient9},</p>
              <p> {recipe.strIngredient10}...</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Recipe;
