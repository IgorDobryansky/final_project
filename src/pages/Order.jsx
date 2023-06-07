import React from "react";

import Form from "../components/form/Form";

function Order() {
  return (
    <div className="container">
      <div className="orderWrapper">
        <div className="head">
          <button className="btn_back" type="button">
            Назад до покупок
          </button>
          <h4>Оформити замовлення</h4>
        </div>
        <div className="orderFlexLeft">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Order;
