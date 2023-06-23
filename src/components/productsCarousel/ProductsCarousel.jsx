/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../styles/_productsCarousel.scss";

import { Button } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1400, min: 768 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 320 },
    items: 1,
    slidesToSlide: 1
  }
};

function ProductsCarousel(props) {
  return (
    <div className="carousel">
      <h1>{props.title}</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots
        infinite
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
        <div>Item 11</div>
        <div>Item 12</div>
        <div>Item 13</div>
      </Carousel>

      <Button className="catalog__button">
        <Link to="/final_project/catalog">Перейти в каталог</Link>
      </Button>
    </div>
  );
}

export default ProductsCarousel;

ProductsCarousel.propTypes = {
  title: PropTypes.string.isRequired
};
