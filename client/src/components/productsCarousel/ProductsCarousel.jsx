/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../styles/_productsCarousel.scss";

import { Button } from "@mui/material";

import Card from "../card/Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1620 },
    items: 3,
    slidesToSlide: 1
  },
  desktopMedium: {
    breakpoint: { max: 1620, min: 1400 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1400, min: 768 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function ProductsCarousel(props) {
  const products = props.products.map((item) => (
    <Card product={item} key={item._id} />
  ));
  return (
    <div className="carousel">
      <h1>{props.title}</h1>
      <Carousel
        showDots
        responsive={responsive}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
        renderDotsOutside
      >
        {products}
      </Carousel>

      <Button className="catalog__button">
        <Link to="/catalog">Перейти в каталог</Link>
      </Button>
    </div>
  );
}

export default ProductsCarousel;

ProductsCarousel.propTypes = {
  title: PropTypes.string.isRequired
};
