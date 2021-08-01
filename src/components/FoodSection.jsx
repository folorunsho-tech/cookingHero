import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { FiChevronRight } from "react-icons/fi";
import Card from "./Card";
import { BrowserRouter, Route } from "react-router-dom";
import Grid from "./Grid";
import CarouselContianer from "./Carousel";
import OptionsCarousel from "./OptionsCarousel";

import axios from "axios";
const w = window.innerWidth;
const FoodSection = ({ title, content, showOptions, options }) => {
  const [recipes, setRecipes] = useState([]);
  const [current, setCurrent] = useState("Beef");

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${current}`
      );
      setRecipes(data.meals.splice(0, 6));
      setCurrent(current);
    })();
  }, [current]);

  return (
    <BrowserRouter>
      {recipes === [] ? (
        <div className="mx-auto text-center">
          <VscLoading
            size="4rem"
            className="text-blue-600 mx-auto animate-spin"
          />
          <p className="text-center text-lg text-blue-500 mt-4">Loading...</p>
        </div>
      ) : (
        <section>
          <div className="flex justify-between items-center pr-12">
            <h2 className="text-xl text-black pl-6 py-2">{title}</h2>
            <p className="text-blue-500 flex items-center gap-2 cursor-pointer">
              View All
              <FiChevronRight />
            </p>
          </div>
          {showOptions && (
            <OptionsCarousel
              options={options}
              current={current}
              setCurrent={setCurrent}
            />
          )}
          <Route path="/:cat">
            {w < 400 && (
              <CarouselContianer>
                {recipes.map((recipe) => (
                  <Card
                    key={recipe.idMeal}
                    title={recipe.strMeal}
                    img={recipe.strMealThumb}
                  />
                ))}
              </CarouselContianer>
            )}
            {w >= 400 && (
              <Grid>
                {recipes.map((recipe) => (
                  <Card
                    key={recipe.idMeal}
                    title={recipe.strMeal}
                    img={recipe.strMealThumb}
                  />
                ))}
              </Grid>
            )}
          </Route>
        </section>
      )}
    </BrowserRouter>
  );
};

export default FoodSection;
