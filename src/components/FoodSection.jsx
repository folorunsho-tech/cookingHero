// import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { FiChevronRight } from "react-icons/fi";
import Card from "./Card";
import { BrowserRouter, Link, NavLink, Route } from "react-router-dom";
import Grid from "./Grid";
import CarouselContianer from "./Carousel";
import OptionsCarousel from "./OptionsCarousel";

const w = window.innerWidth;
const FoodSection = ({
  title,
  content,
  showOptions,
  options,
  current,
  setCurrent,
  viewAll,
  loading,
}) => {
  return (
    <BrowserRouter forceRefresh={true}>
      {loading === true ? (
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
            <NavLink
              to={viewAll}
              className="text-blue-500 flex items-center gap-2 cursor-pointer"
            >
              View All
              <FiChevronRight />
            </NavLink>
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
                {content.map((recipe) => (
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
                {content.map((recipe) => (
                  <Card
                    key={recipe.idMeal}
                    title={recipe.strMeal}
                    img={recipe.strMealThumb}
                  />
                ))}
              </Grid>
            )}
          </Route>
          <Route path="/" exact>
            {w >= 400 && (
              <Grid>
                {content.map((recipe) => (
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
