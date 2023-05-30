import React from "react";
import { Link } from "react-router-dom";

import "../../styles/_footer.scss";

import mainLogo from "../../assets/images/footer/main-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="privacy">
          <img src={mainLogo} alt="" />
          <p>© 2021 “Copper Pro” Всі права захищені</p>
          <Link to="/final_project/privacy">Політика конфіденційності</Link>
        </div>
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
    </div>
  );
}

export default Footer;
