import React from "react";
import "./_Card.scss";

const Card = ({ product }) => (
  <div className="card">
    {product.priceOld ? <div className="card__sale">SALE</div> : null}
    <img className="card__image" src={product.img} alt="Product" />
    <div className="card__description">
      <h1>{product.name}</h1>
      <div className="card__price">
        {product.priceOld && (
          <h2 className="card__price__old">{product.priceOld} грн</h2>
        )}
        <p
          className={
            product.priceOld ? "card__price__now promotion" : "card__price__now"
          }
        >
          {product.priceNow} грн
        </p>
      </div>
    </div>
  </div>
);

export default Card;
