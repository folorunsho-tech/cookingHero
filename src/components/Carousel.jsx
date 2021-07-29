import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselContianer = (props) => {
  return (
    <Carousel
      labels={{
        rightleftArrow: "previous slide / item",
        rightArrow: "next slide / item",
        item: "slide item",
      }}
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows={true}
      showThumbs={false}
      centerMode={true}
      className="mt-3 p-3"
    >
      {props.children}
    </Carousel>
  );
};

export default CarouselContianer;
