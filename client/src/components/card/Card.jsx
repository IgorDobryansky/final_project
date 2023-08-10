import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./_Card.scss";

const Card = ({ product }) => (
  <div className="card">
    {product.previousPrice ? <div className="card__sale">SALE</div> : null}
    <Link to="catalog/:productId" className="product_link">
      <img className="card__image" src={product.imageUrls[0]} alt="Product" />
    </Link>
    <div className="card__description">
      <Link to="catalog/:productId" className="product_link">
        <h1>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h1>
      </Link>
      <div className="card__price">
        {product.previousPrice && (
          <h2 className="card__price__old">{product.previousPrice} грн</h2>
        )}
        <p
          className={
            product.previousPrice
              ? "card__price__now promotion"
              : "card__price__now"
          }
        >
          {product.currentPrice} грн
        </p>
      </div>
    </div>
    <Outlet />
  </div>
);

export default Card;
