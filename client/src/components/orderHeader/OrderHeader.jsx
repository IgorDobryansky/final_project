import React from "react";

import { Link } from "react-router-dom";
import user1 from "../../assets/images/order/user1.svg";

const OrderHeader = () => (
  <div className="orderFlexLeft_header">
    <div className="orderFlexLeft_header_svg">
      <img src={user1} alt="img" />
    </div>
    <div className="text_head">
      <p className="text_head1">Вже є аккаунт або хочете зареєструватися?</p>
      <p className="text_head2">Увійдіть до кабінету та отримайте знижку</p>
    </div>
    <div className="header_btn">
      <Link to="/login">
        <button className="btn btn_dark" type="submit">
          Увійти
        </button>
      </Link>
      <Link to="/register">
        <button className="btn btn_light" type="submit">
          Реєстрація
        </button>
      </Link>
    </div>
  </div>
);

export default OrderHeader;
