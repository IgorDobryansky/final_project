import React from "react";
import "./productCard.scss";
import product from "../../assets/images/card/product.png";
import vector from "../../assets/images/card/vector.png";
import twitter from "../../assets/images/card/twitter.svg";
import facebook from "../../assets/images/card/facebook.svg";
import instagram from "../../assets/images/card/instagram.svg";
//import Carousel from "../Carousel";

export default function Card() {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="carusel">Карусель</div>
        <div>
          <img className="card__image" src={product} alt="Product" />
        </div>
        <div className="card__wrapper-content">
          <div className="card__description">
            <h1>Кава Melitta Bella Crema Bio (750 г), зерно</h1>
            <div className="card__description_available">
              <div>
                <img className="icon_vector" src={vector} alt="Available" />
                <span className="card__description-available-item">
                  В наявності
                </span>
              </div>
              <p className="card__description-article">
                {" "}
                Артикул:<span> CP-0803</span>
              </p>
            </div>
            <h3>Опис</h3>
            <p className="card__content">
              При описі аромату в першу чергу описується його характер:
              солодкий, насичений, пряний, освіжаючий, а також називаються
              чотирма дескрипторами. Учасник може порекомендувати суддям спосіб,
              яким краще оцінювати аромат кави. Наприклад: він тримає судину в
              руках і пропонує суддям у такий спосіб ознайомитися з ароматом.
            </p>
            <div className="price">
              <h4 className="price__title">Ціна</h4>
              <div className="price__amount">
                <h2 className="price__now">953 грн</h2>
                <p className="price__old">1 253 грн</p>
              </div>
            </div>
            <div className="button_wrapper">
              <div className="button_count">
                <button className="button_count-item">+</button>
                <p className="button_count-amount">1</p>
                <button>-</button>
              </div>
              <button className="button_buy">Придбати</button>
            </div>
          </div>
          <div className="card__share">
            <span>Поділитися</span>
            <div>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#" className="icon_fb">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5>Опис</h5>
        <p>
          При описі аромату в першу чергу описується його характер: солодкий,
          насичений, пряний, освіжаючий, а також називаються чотирма
          дескрипторами. Учасник може порекомендувати суддям спосіб, яким краще
          оцінювати аромат кави. Наприклад: він тримає судину в руках і пропонує
          суддям у такий спосіб ознайомитися з ароматом. При описі аромату та
          смаку рекомендують називати не більше чотирьох дескрипторів. Вони
          мають бути явними, читаними та зрозумілими для суддів. Якщо суддя
          справді відчує їх в ароматі — оцінка буде вищою. Якщо учасник відчуває
          жовті тропічні фрукти, але не розуміє, які конкретно, він так і каже:
          «в ароматі ви відчуєте ноти жовтих тропічних фруктів». За це йому
          поставлять трохи менше балів. Якщо ж він скаже, що смакує манго, але
          суддя його не відчує — йому поставлять низький бал.
        </p>
      </div>
      <div className="button_wrapper">
        <h5>Відгуки</h5>
        <button className="button_feedback">Залишити відгук</button>
      </div>
      <div className="card__options">
        <h6>Вам також буде цікаво…</h6>
        {/* <Carousel/> */}
      </div>
    </div>
  );
}
