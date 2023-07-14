import React from "react";

import { Link } from "react-router-dom";

import Form from "../components/form/Form";

const Order = () => {
  const items = [
    {
      id: 1,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 1,
      price: 6000,
      newPrice: +Date.now().toString().slice(-4)
    },
    {
      id: 2,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 1,
      price: +Date.now().toString().slice(-4)
    },
    {
      id: 3,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 1,
      price: +Date.now().toString().slice(-4)
    },
    {
      id: 4,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 1,
      price: +Date.now().toString().slice(-4)
    },
    {
      id: 5,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 1,
      price: +Date.now().toString().slice(-4)
    }
  ];

  return (
    <div className="orderWrapper">
      <div className="head">
        <Link to="/final_project/catalog">
          <button className="btn_back" type="button">
            Назад до покупок
          </button>
        </Link>
        <h4 className="order_tittle">Оформити замовлення</h4>
      </div>
      <Form items={items} />
    </div>
  );
};

export default Order;
