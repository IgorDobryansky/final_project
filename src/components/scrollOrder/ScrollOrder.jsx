import React from "react";

function Scroll() {
  const items = [
    {
      id: 1,
      image: "#",
      name: "Product 1",
      quantity: 3,
      price: 10.99
    },
    {
      id: 2,
      image: "#",
      name: "Product 2",
      quantity: 5,
      price: 15.99
    },
    {
      id: 1,
      image: "#",
      name: "Product 1",
      quantity: 3,
      price: 10.99
    },
    {
      id: 2,
      image: "#",
      name: "Product 2",
      quantity: 5,
      price: 15.99
    }
  ];

  return (
    <div className="scroll-container">
      {items.map((item) => (
        <div key={item.id} className="item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <div className="hr" />
        </div>
      ))}
    </div>
  );
}

export default Scroll;
