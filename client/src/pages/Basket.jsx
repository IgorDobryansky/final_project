import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../components/ui/button/Button";
import brokenImage from "../assets/images/broken-image.png";
import deleteIcon from "../assets/images/basket/delete-product.png";
import { removeProduct, increaseCount, decreaseCount } from "../redux/actions";

const Basket = () => {
  const productsArray = useSelector((state) => state.basket.productsArray);
  // const productsArray = useSelector((state) => state.productsArray);
  const isDeleting = useSelector((state) => state.isDeleting);
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleIncreaseCount = (id) => {
    dispatch(increaseCount(id));
  };

  const handleDecreaseCount = (id) => {
    dispatch(decreaseCount(id));
  };

  const freeDelivery = true;
  return (
    <div className="basket">
      <div className="link_nav_basket">
        <Link to="/final_project/home" className="general_link">
          Головна
        </Link>
        <span> / </span>
        <Link to="/final_project/basket" className="basket_link">
          Кошик
        </Link>
      </div>
      <h2 className="basket-header">
        Кошик {!productsArray.length && "порожній"}
      </h2>
      {!productsArray.length && (
        <Link to="/final_project/catalog">
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
                  productsArray.map((product) => (
                    <div className="product-card" key={product.id}>
                      <button
                        type="button"
                        disabled={isDeleting}
                        style={{ backgroundColor: "rgb(255,255,255)" }}
                        className="delete-product"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <div className="delete-product__image-wrapper">
                          <img src={deleteIcon} alt="" />
                        </div>
                      </button>
                      <div className="product-card__info">
                        <div className="product-card__image">
                          <div className="product-card__image-wrapper">
                            <img
                              src={product.image ? product.image : brokenImage}
                              alt="Product"
                            />
                          </div>
                        </div>
                        <div className="product-card__description">
                          <span>{product.name}</span>
                        </div>
                      </div>
                      <div className="product-card__helper">
                        <div className="product-card__count">
                          <button
                            type="button"
                            className="product-card__count-button"
                            onClick={() => handleDecreaseCount(product.id)}
                            disabled={isDeleting}
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
                            {product.count} шт.
                          </span>
                          <button
                            type="button"
                            className="product-card__count-button"
                            onClick={() => handleIncreaseCount(product.id)}
                            disabled={isDeleting}
                            style={{ backgroundColor: "rgb(255,255,255)" }}
                          >
                            +
                          </button>
                        </div>
                        <div className="product-card__price">
                          {product.oldPrice && (
                            <div className="old-price">
                              <span>{product.oldPrice} грн</span>
                            </div>
                          )}
                          <span
                            className="current-price"
                            style={{
                              color: product.oldPrice && "#9B0000",
                              fontWeight: product.oldPrice && 800
                            }}
                          >
                            {product.price * product.count} грн
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
                {productsArray.reduce(
                  (acc, { price, count }) => acc + price * count,
                  0
                )}{" "}
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
              <Link to="/final_project/order">
                <Button title="Оформити замовлення" width="374" />
              </Link>
            </div>
          </section>
        </div>
      ) : null}
      {!!productsArray.length && (
        <Link to="/final_project/catalog" className="none-desktop">
          <Button title="Назад до покупок" width="327" secondary />
        </Link>
      )}
    </div>
  );
};

export default Basket;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
//
// import Button from "../components/ui/button/Button";
// import brokenImage from "../assets/images/broken-image.png";
// import productImage from "../assets/images/basket/product-image.png";
// import deleteIcon from "../assets/images/basket/delete-product.png";
//
// const Basket = () => {
//   const [productsArray, setProductsArray] = useState([
//     {
//       id: 1,
//       name: "Кава Melitta Bella Crema Bio (750 г), зерно",
//       price: +Date.now().toString().slice(-4),
//       oldPrice: 1231,
//       image: "",
//       count: 1
//     },
//     {
//       id: 2,
//       name: "Кава Melitta Bella Crema Bio (1000 г), зерно",
//       price: +Date.now().toString().slice(-4),
//       image: productImage,
//       count: 1
//     },
//     {
//       id: 3,
//       name: "Кава Melitta Bella Crema Bio (1250 г), зерно",
//       price: +Date.now().toString().slice(-4),
//       image: productImage,
//       count: 1
//     },
//     {
//       id: 4,
//       name: "Кава Melitta Bella Crema Bio (1500 г), зерно",
//       price: +Date.now().toString().slice(-4),
//       oldPrice: 1231,
//       image: "",
//       count: 1
//     }
//   ]);
//
//   const [isDeleting, setIsDeleting] = useState(false);
//
//   const removeProduct = (id) => {
//     setIsDeleting(true);
//     setProductsArray((prev) => {
//       setIsDeleting(false);
//       return prev.filter((product) => product.id !== id);
//     });
//   };
//
//   const increaseCount = (id) => {
//     setProductsArray((prev) =>
//       prev.map((product) =>
//         product.id === id ? { ...product, count: product.count + 1 } : product
//       )
//     );
//   };
//
//   const decreaseCount = (id) => {
//     setProductsArray((prev) =>
//       prev.map((product) =>
//         product.id === id
//           ? { ...product, count: Math.max(product.count - 1, 1) }
//           : product
//       )
//     );
//   };
//
//   const freeDelivery = true;
//   return (
//     <div className="basket">
//       <div className="link_nav_basket">
//         <Link to="/final_project/home" className="general_link">
//           Головна
//         </Link>
//         <span> / </span>
//         <Link to="/final_project/basket" className="basket_link">
//           Кошик
//         </Link>
//       </div>
//       <h2 className="basket-header">
//         Кошик {!productsArray.length && "порожній"}
//       </h2>
//       {!productsArray.length && (
//         <Link to="/final_project/catalog">
//           <Button title="Назад до покупок" width="327" secondary />
//         </Link>
//       )}
//       {productsArray.length ? (
//         <div className="basket-body">
//           <section className="basket-body__products">
//             <div className="added-products">
//               <div className="added-products__header">
//                 <span className="product-name">Товар</span>
//                 <span className="product-count">Кількість</span>
//                 <span className="product-price">Ціна</span>
//               </div>
//               <div className="product-cards">
//                 {!!productsArray.length &&
//                   productsArray.map((product) => (
//                     <div className="product-card" key={product.id}>
//                       <button
//                         type="button"
//                         disabled={isDeleting}
//                         style={{ backgroundColor: "rgb(255,255,255)" }}
//                         className="delete-product"
//                         onClick={() => removeProduct(product.id)}
//                       >
//                         <div className="delete-product__image-wrapper">
//                           <img src={deleteIcon} alt="" />
//                         </div>
//                       </button>
//                       <div className="product-card__info">
//                         <div className="product-card__image">
//                           <div className="product-card__image-wrapper">
//                             <img
//                               src={product.image ? product.image : brokenImage}
//                               alt="Product"
//                             />
//                           </div>
//                         </div>
//                         <div className="product-card__description">
//                           <span>{product.name}</span>
//                         </div>
//                       </div>
//                       <div className="product-card__helper">
//                         <div className="product-card__count">
//                           <button
//                             type="button"
//                             className="product-card__count-button"
//                             onClick={() => decreaseCount(product.id)}
//                             disabled={isDeleting}
//                             style={{ backgroundColor: "rgb(255,255,255)" }}
//                           >
//                             -
//                           </button>
//                           <span
//                             className="product-card__count-value"
//                             style={{
//                               border: "1px solid #E6E8E7",
//                               borderRadius: "10%",
//                               padding: "5px",
//                               margin: "10px"
//                             }}
//                           >
//                             {product.count} шт.
//                           </span>
//                           <button
//                             type="button"
//                             className="product-card__count-button"
//                             onClick={() => increaseCount(product.id)}
//                             disabled={isDeleting}
//                             style={{ backgroundColor: "rgb(255,255,255)" }}
//                           >
//                             +
//                           </button>
//                         </div>
//                         <div className="product-card__price">
//                           {product.oldPrice && (
//                             <div className="old-price">
//                               <span>{product.oldPrice} грн</span>
//                             </div>
//                           )}
//                           <span
//                             className="current-price"
//                             style={{
//                               color: product.oldPrice && "#9B0000",
//                               fontWeight: product.oldPrice && 800
//                             }}
//                           >
//                             {product.price * product.count} грн
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 <Link to="/final_project/catalog">
//                   <Button title="Назад до покупок" width="327" secondary />
//                 </Link>
//               </div>
//             </div>
//           </section>
//           <section className="basket-body__info">
//             <div className="count">
//               <span className="count-text">Разом</span>
//               <span className="count-summ">
//                 {productsArray.reduce(
//                   (acc, { price, count }) => acc + price * count,
//                   0
//                 )}{" "}
//                 грн
//               </span>
//             </div>
//             <div className="submit">
//               {freeDelivery && (
//                 <div className="delivery">
//                   <div className="delivery-image-wrapper">
//                     <img
//                       src="../assets/images/basket/delivery.png"
//                       alt="Delivery icon"
//                     />
//                   </div>
//                   <span className="delivery-description">
//                     У вас є безкоштовна доставка!
//                   </span>
//                 </div>
//               )}
//               <Link to="/final_project/order">
//                 <Button title="Оформити замовлення" width="374" />
//               </Link>
//             </div>
//           </section>
//         </div>
//       ) : null}
//       {!!productsArray.length && (
//         <Link to="/final_project/catalog" className="none-desktop">
//           <Button title="Назад до покупок" width="327" secondary />
//         </Link>
//       )}
//     </div>
//   );
// };
//
// export default Basket;
