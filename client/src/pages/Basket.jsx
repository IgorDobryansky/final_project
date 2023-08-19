import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../components/ui/button/Button";
import brokenImage from "../assets/images/broken-image.png";
import deleteIcon from "../assets/images/basket/delete-product.png";
import {
  removeProduct,
  decreaseCount,
  increaseCount
} from "../redux/actions/basketActions";

const Basket = () => {
  const productsArray = useSelector((state) => state.basket.productsArray);
  // const quantity = useSelector((state) => state.catalog.quantity);
  const isDeleting = useSelector((state) => state.basket.isDeleting);
  const dispatch = useDispatch();

  const handleRemoveProduct = (itemNo) => {
    dispatch(removeProduct(itemNo));
  };

  const handleIncreaseCount = (itemNo) => {
    dispatch(increaseCount(itemNo));
  };

  const handleDecreaseCount = (itemNo) => {
    dispatch(decreaseCount(itemNo));
  };

  const freeDelivery = true;

  return (
    <div className="basket">
      <div className="link_nav_basket">
        <Link to="/home" className="general_link">
          Головна
        </Link>
        <span> / </span>
        <Link to="/basket" className="basket_link">
          Кошик
        </Link>
      </div>
      <h2 className="basket-header">
        Кошик {!productsArray.length && "порожній"}
      </h2>
      {!productsArray.length && (
        <Link to="/catalog">
          <Button title="Назад до покупок" width="327" secondary />
        </Link>
      )}
      {productsArray.length ? (
        <div className="basket-body">
          <section className="basket-body__products">
            <div className="added-products">
              <div className="added-products__header">
                <span className="product-name">Товар</span>
                <span className="product-count">Кількість</span>
                <span className="product-price">Ціна</span>
              </div>
              <div className="product-cards">
                {!!productsArray.length &&
                  productsArray.map((product, index) => (
                    <div className="product-card" key={product.product.itemNo}>
                      <button
                        type="button"
                        disabled={isDeleting}
                        style={{ backgroundColor: "rgb(255,255,255)" }}
                        className="delete-product"
                        onClick={() => handleRemoveProduct(index)}
                      >
                        <div className="delete-product__image-wrapper">
                          <img src={deleteIcon} alt="" />
                        </div>
                      </button>
                      <div className="product-card__info">
                        <div className="product-card__image">
                          <div className="product-card__image-wrapper">
                            <img
                              src={
                                product.product.imageUrls &&
                                product.product.imageUrls.length
                                  ? product.product.imageUrls[0]
                                  : brokenImage
                              }
                              alt="Product"
                            />
                          </div>
                        </div>
                        <div className="product-card__description">
                          <span>{product.product.name}</span>
                        </div>
                      </div>
                      <div className="product-card__helper">
                        <div className="product-card__count">
                          <button
                            type="button"
                            className="product-card__count-button"
                            onClick={() => handleDecreaseCount(index)}
                            // disabled={isDeleting}
                            style={{ backgroundColor: "rgb(255,255,255)" }}
                          >
                            -
                          </button>
                          <span
                            className="product-card__count-value"
                            style={{
                              border: "1px solid #E6E8E7",
                              borderRadius: "10%",
                              padding: "5px",
                              margin: "10px"
                            }}
                          >
                            {product.cartQuantity} шт.
                          </span>
                          <button
                            type="button"
                            className="product-card__count-button"
                            onClick={() => handleIncreaseCount(index)}
                            style={{ backgroundColor: "rgb(255,255,255)" }}
                          >
                            +
                          </button>
                        </div>
                        <div className="product-card__price">
                          {product.product.previousPrice && (
                            <div className="old-price">
                              <span>{product.product.previousPrice} грн</span>
                            </div>
                          )}
                          <span
                            className="current-price"
                            style={{
                              color: product.previousPrice && "#9B0000",
                              fontWeight: product.product.previousPrice && 800
                            }}
                          >
                            {(
                              parseFloat(product.product.currentPrice) *
                              parseFloat(product.cartQuantity)
                            ).toFixed(2)}{" "}
                            грн
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                <Link to="/final_project/catalog">
                  <Button title="Назад до покупок" width="327" secondary />
                </Link>
              </div>
            </div>
          </section>
          <section className="basket-body__info">
            <div className="count">
              <span className="count-text">Разом</span>
              <span className="count-summ">
                {productsArray
                  .reduce(
                    (acc, { product, cartQuantity }) =>
                      acc + product.currentPrice * cartQuantity,
                    0
                  )
                  .toFixed(2)}{" "}
                грн
              </span>
            </div>
            <div className="submit">
              {freeDelivery && (
                <div className="delivery">
                  <div className="delivery-image-wrapper">
                    <img
                      src="../assets/images/basket/delivery.png"
                      alt="Delivery icon"
                    />
                  </div>
                  <span className="delivery-description">
                    У вас є безкоштовна доставка!
                  </span>
                </div>
              )}
              <Link to="/order">
                <Button title="Оформити замовлення" width="374" />
              </Link>
            </div>
          </section>
        </div>
      ) : null}
      {!!productsArray.length && (
        <Link to="/catalog" className="none-desktop">
          <Button title="Назад до покупок" width="327" secondary />
        </Link>
      )}
    </div>
  );
};

export default Basket;
