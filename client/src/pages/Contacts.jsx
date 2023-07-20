import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => (
  <div className="contacts_container">
    <div className="wrapper_container">
      <div className="link_nav_contacts">
        <Link to="/home" className="general_link">
          Головна
        </Link>
        <span> / </span>
        <Link to="/contacts" className="contacts_link">
          Контакти
        </Link>
      </div>
      <h4>Наші контакти:</h4>
      <p className="contacts_text">МИ ЗАВЖДИ НА ЗВ&#39;ЯЗКУ!</p>
      <p>
        Ви можете написати нам{" "}
        <Link
          className="contacts_email"
          to="mailto:svoyachki@gmail.com"
          target="_blank"
        >
          листа.
        </Link>
      </p>
      <p>Зателефонувати нам по телефонам:</p>
      <div className="contacts_phone">
        <Link to="tel:0969906756">+38 (096) 990 67 56 </Link>
        <Link to="tel:0639906756">+38 (063) 990 67 56 </Link>
      </div>
      <p>
        Графік роботи нашого онлайн-магазину:<b> Пн-Сб, з 10:00 по 21:00.</b>
      </p>
      <p>Наш офіс знаходиться за адресою: Бажана 8-Б, Київ, 02132 Україна</p>
    </div>
  </div>
);
export default Contacts;
