import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./_Card.scss";

const Card = ({ product }) => (
  <div className="card">
    {product.priceOld ? <div className="card__sale">SALE</div> : null}
    <Link to="catalog/:productId" className="product_link">
      <img className="card__image" src={product.img} alt="Product" />
    </Link>
    <div className="card__description">
      <Link to="catalog/:productId" className="product_link">
        <h1>{product.name}</h1>
      </Link>
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
    <Outlet />
  </div>
);

export default Card;
