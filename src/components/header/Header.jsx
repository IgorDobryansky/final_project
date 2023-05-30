import React from "react";
import { Link } from "react-router-dom";

import "../../styles/_header.scss";

import mainLogo from "../../assets/images/header/main-logo.png";
import heartLogo from "../../assets/images/header/heart-logo.png";
import cabinetLogo from "../../assets/images/header/cabinet-logo.png";
import carttLogo from "../../assets/images/header/shopping-cart-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link className="logo" to="/final_project">
          <img className="logo-element" src={mainLogo} alt="" />
        </Link>
        <div className="nav">
          <ul className="nav-list">
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

          <ul className="nav-other">
            <li>
              <Link to="/final_project">
                <img src={heartLogo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/final_project">
                <img src={cabinetLogo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/final_project">
                <div>
                  <span>num</span>
                  <img src={carttLogo} alt="" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
