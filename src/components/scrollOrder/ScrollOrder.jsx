import React from "react";

const Scroll = ({ items }) => (
  <div className="scroll-container">
    <div className="scroll-content">
      {items.map((item) => (
        <div key={item.id} className="item">
          <img src={item.image} alt={item.name} className="order_img" />
          <div className="item_content">
            <h3 className="name">{item.name}</h3>
            <div className="block_price">
              <p className="quantity">{item.quantity}шт.</p>
              <p className="price">{item.price}грн</p>
            </div>
            <p className="last_price">{item.lastPrice}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Scroll;
