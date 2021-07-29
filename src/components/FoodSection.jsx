import React from "react";
import { VscLoading } from "react-icons/vsc";
import { FiChevronRight } from "react-icons/fi";
import Card from "./Card";
import Grid from "./Grid";
import CarouselContianer from "./Carousel";
import OptionsCarousel from "./OptionsCarousel";
const w = window.innerWidth;

const FoodSection = ({ title, content, showOptions, options, loading }) => {
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
        <section>
          <div className="flex justify-between items-center pr-12">
            <h2 className="text-xl text-black pl-6 py-2">{title}</h2>
            <p className="text-blue-500 flex items-center gap-2 cursor-pointer">
              View All
              <FiChevronRight />
            </p>
          </div>
          {showOptions && <OptionsCarousel options={options} />}
          {w < 400 && (
            <CarouselContianer>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </CarouselContianer>
          )}
          {w >= 400 && (
            <Grid>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Grid>
          )}
        </section>
      )}
    </>
  );
};

export default FoodSection;
