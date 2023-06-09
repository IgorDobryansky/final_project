import React from "react";
import Card from "../card/Card";

const Cards = ({ products, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="cards-list">
      {products.map((item) => (
        <Card product={item} />
      ))}
    </div>
  );
};

export default Cards;
