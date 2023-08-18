import React from "react";
import { useSelector } from "react-redux";
import brokenImage from "../../assets/images/broken-image.png";

const Scroll = () => {
  const productsArray = useSelector((state) => state.basket.productsArray);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {productsArray.map((product) => (
          <div key={product.product.itemNo} className="item">
            <div className="mobile">
              <div className="img_quantity_mobile">
                <img
                  src={
                    product.product.imageUrls &&
                    product.product.imageUrls.length
                      ? product.product.imageUrls[0]
                      : brokenImage
                  }
                  alt={product.product.name}
                  className="order_img"
                />
                <h3 className="name">{product.product.name}</h3>
              </div>
              <div className="name_price_mobile">
                <p className="quantity_mobile">{product.cartQuantity} шт.</p>
                <div className="product-card_price">
                  {product.product.previousPrice && (
                    <div className="old_price">
                      <span>{product.product.previousPrice} грн</span>
                    </div>
                  )}
                  <span
                    className="current-price"
                    style={{
                      color: product.product.previousPrice && "#9B0000",
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
            <div className="desktop">
              <img
                src={
                  product.product.imageUrls && product.product.imageUrls.length
                    ? product.product.imageUrls[0]
                    : brokenImage
                }
                alt={product.product.name}
                className="order_img"
              />
              <div className="item_content">
                <h3 className="name">{product.product.name}</h3>
                <div className="block_price">
                  <p className="quantity">{product.cartQuantity} шт.</p>
                  <div className="price_position">
                    {product.product.previousPrice && (
                      <div className="old_price">
                        <span>{product.product.previousPrice} грн</span>
                      </div>
                    )}
                    <span
                      className="current-price"
                      style={{
                        color: product.product.previousPrice && "#9B0000",
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;

// import React from "react";
//
// const Scroll = ({ items }) => (
//   <div className="scroll-container">
//     <div className="scroll-content">
//       {items.map((item) => (
//         <div key={item.id} className="item">
//           <div className="mobile">
//             <div className="img_quantity_mobile">
//               <img src={item.image} alt={item.name} className="order_img" />
//               <h3 className="name">{item.name}</h3>
//             </div>
//             <div className="name_price_mobile">
//               <p className="quantity_mobile">{item.quantity} шт.</p>
//               <div className="price_position">
//                 <p className={`price ${item.newPrice ? "grey-color" : ""}`}>
//                   {item.price} грн
//                 </p>
//                 {item.newPrice && (
//                   <p className="newPrice">{item.newPrice} грн</p>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="desktop">
//             <img src={item.image} alt={item.name} className="order_img" />
//             <div className="item_content">
//               <h3 className="name">{item.name}</h3>
//               <div className="block_price">
//                 <p className="quantity">{item.quantity} шт.</p>
//                 <div className="price_position">
//                   <p className={`price ${item.newPrice ? "grey-color" : ""}`}>
//                     {item.price} грн
//                   </p>
//                   {item.newPrice && (
//                     <p className="newPrice">{item.newPrice} грн</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
//
// export default Scroll;
