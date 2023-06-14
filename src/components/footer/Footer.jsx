import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import "../../styles/_footer.scss";

import mainLogo from "../../assets/images/footer/main-logo.png";

import twitterLogo from "../../assets/images/footer/twitter-logo.png";
import facebookLogo from "../../assets/images/footer/facebook-logo.png";
import instagramLogo from "../../assets/images/footer/instagram-logo.png";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="privacy">
          <img src={mainLogo} alt="" />
          <p>© 2021 “Copper Pro” Всі права захищені</p>
          <Link to="/final_project/privacy">Політика конфіденційності</Link>
        </div>
        <div className="navbar">
          <div className="nav">
            <h1 className="nav__title">Навігація</h1>
            <ul>
              <li>
                <Link to="/final_project/catalog">Каталог</Link>
              </li>
              <li>
                <Link to="/final_project/news">Новини</Link>
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
          <div className="contacts">
            <h1 className="contacts__title">Контакти</h1>
            <ul>
              <li>Бажана 8-Б, Київ, 02132 Україна</li>
              <li>+38 (096) 990 67 56</li>
              <li>svoyachki@gmail.com</li>
              <li>
                <a href="https://www.twitter.com/">
                  <img
                    className="contacts-list__item-img"
                    src={twitterLogo}
                    alt=""
                  />
                </a>
                <a href="https://www.facebook.com/">
                  <img
                    className="contacts-list__item-img facebook-img"
                    src={facebookLogo}
                    alt=""
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    className="contacts-list__item-img"
                    src={instagramLogo}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="ontop-wrapper">
            <Button onClick={scrollToTop} variant="contained" color="primary">
              ВВЕРХ
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
