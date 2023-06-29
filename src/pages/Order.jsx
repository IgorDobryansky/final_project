import React from "react";

import { Link } from "react-router-dom";
import Form from "../components/form/Form";

const Order = () => {
  const items = [
    {
      id: 1,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 3,
      price: 6000,
      newPrice: 5000
    },
    {
      id: 2,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 2,
      price: 5000
    },
    {
      id: 3,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 3,
      price: 5000
    },
    {
      id: 4,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 5,
      price: 5000
    },
    {
      id: 5,
      image: "../assets/images/order/coffe.png",
      name: "Дистиллятор для получения гидролата 8л",
      quantity: 3,
      price: 5000
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
