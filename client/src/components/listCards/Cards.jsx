import React from "react";
import Card from "../card/Card";

const Cards = ({ products }) => (
  <div className="cards-list">
    {products.map((item) => (
      <Card product={item} key={item.itemNo} />
    ))}
  </div>
);

export default Cards;
