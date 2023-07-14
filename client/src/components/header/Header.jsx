import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "../../styles/_header.scss";

import mainLogo from "../../assets/images/header/main-logo.png";
import heartLogo from "../../assets/images/header/heart-logo.png";
import cabinetLogo from "../../assets/images/header/cabinet-logo.png";
import cartLogo from "../../assets/images/header/shopping-cart-logo.png";

import menuBtn from "../../assets/images/header/header-menu-btn.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-wrapper">
        <Link className="logo" to="/">
          <img className="logo-element" src={mainLogo} alt="" />
        </Link>
        <div className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка</Link>
            </li>
            <li>
              <Link to="/aboutUs">Про нас</Link>
            </li>
            <li>
              <Link to="/contacts">Контакти</Link>
            </li>
          </ul>
        </div>
        <div className="pages">
          <ul className="pages-list">
            <li>
              <Link to="/favorite">
                <img src={heartLogo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/cabinet">
                <img src={cabinetLogo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/basket">
                <div>
                  <span>num</span>
                  <img src={cartLogo} alt="" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
          <button onClick={toggleMenu} type="button">
            <img src={menuBtn} alt="" />
          </button>
          {isMenuOpen && (
            <ul className="menu-list">
              <li>
                <Link to="/catalog">Каталог</Link>
              </li>
              <li>
                <Link to="/delivery">Доставка</Link>
              </li>
              <li>
                <Link to="/aboutUs">Про нас</Link>
              </li>
              <li>
                <Link to="/contacts">Контакти</Link>
              </li>
              <li>
                <Link to="/basket">Корзина</Link>
              </li>
              <p>
                « Ми вчимо насолоджуватися кожною хвилиною »
                <span>Степан Бандера</span>
              </p>
            </ul>
          )}
        </div>
        {isMenuOpen && <div className="overlay" />}
      </div>
    </div>
  );
};
export default Header;
