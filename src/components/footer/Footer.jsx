import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
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
        </ul>
      </div>
    </div>
  );
}

export default Footer;
