import React from "react";
import { useSelector } from "react-redux";

const Scroll = () => {
  const productsArray = useSelector((state) => state.basket.productsArray);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {productsArray.map((product) => (
          <div key={product.id} className="item">
            <div className="mobile">
              <div className="img_quantity_mobile">
                <img
                  src={product.image}
                  alt={product.name}
                  className="order_img"
                />
                <h3 className="name">{product.name}</h3>
              </div>
              <div className="name_price_mobile">
                <p className="quantity_mobile">{product.count} шт.</p>
                <div className="product-card_price">
                  {product.oldPrice && (
                    <div className="old_price">
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
            <div className="desktop">
              <img
                src={product.image}
                alt={product.name}
                className="order_img"
              />
              <div className="item_content">
                <h3 className="name">{product.name}</h3>
                <div className="block_price">
                  <p className="quantity">{product.count} шт.</p>
                  <div className="price_position">
                    {product.oldPrice && (
                      <div className="old_price">
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
