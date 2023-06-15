import React from "react";
import "./_productCard.scss";

function Card({ product }) {
  return (
    <div className="card">
      {product.priceOld ? <div className="card__sale">SALE</div> : null}
      <img className="card__image" src={product.img} alt="Product" />
      <div className="card__description">
        <h1>{product.name}</h1>
        <div className="price">
          {product.priceOld && (
            <h2 className="price__old">{product.priceOld} грн</h2>
          )}
          <p
            className={product.priceOld ? "price__now promotion" : "price__now"}
          >
            {product.priceNow} грн
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
