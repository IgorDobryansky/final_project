import React from "react";

import { Link } from "react-router-dom";

import Form from "../components/form/Form";

const Order = () => (
  <div className="orderWrapper">
    <div className="head">
      <Link to="/catalog">
        <button className="btn_back" type="button">
          Назад до покупок
        </button>
      </Link>
      <h4 className="order_tittle">Оформити замовлення</h4>
    </div>
    <Form />
  </div>
);

export default Order;
