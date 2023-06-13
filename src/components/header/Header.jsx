import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link className="logo" to="/final_project">
      Logo
    </Link>
    <div className="nav">
      <ul>
        <li>
          <Link to="/final_project">Home</Link>
        </li>
        <li>
          <Link to="/final_project/catalog">Каталог</Link>
        </li>
        <li>
          <Link to="/final_project/delivery">Доставка</Link>
        </li>
        <li>
          <Link to="/final_project/aboutUs">Про нас</Link>
        </li>
        <li>
          <Link to="/final_project/contacts">Контакти</Link>
        </li>
        <li>
          <Link to="/final_project/basket">Кошик</Link>
        </li>
      </ul>
    </div>
  </div>
);
export default Header;
