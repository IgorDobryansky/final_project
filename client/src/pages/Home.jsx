import React from "react";

import "../styles/_home.scss";

import ProductsCarousel from "../components/productsCarousel/ProductsCarousel";

import assortementLogo from "../assets/images/home/assortment-logo.png";
import concernLogo from "../assets/images/home/concern-logo.png";
import deliveyLogo from "../assets/images/home/delivery-logo.png";
import eleganceLogo from "../assets/images/home/elegance-logo.png";
import garantineLogo from "../assets/images/home/garantine-logo.png";
import paymentLogo from "../assets/images/home/payment-logo.png";

const data = [
  {
    id: 1,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 2000,
    priceNow: 800
  },
  {
    id: 2,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 3000
  },
  {
    id: 3,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 4,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 5,
    img: "https://brayval-coffee.com.ua/content/uploads/images/kofe.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 3000
  },
  {
    id: 6,
    img: "https://pudov.ru/upload/resize_cache/webp/iblock/85a/715_500_1/tidlqh2flfxwcdzg9pi7cu293ba820oe.webp",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 7,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 8,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 9,
    img: "data:image/jpeg;base64,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",
    name: "В`єтнамська кава (300 г)",
    priceNow: 5000
  },
  {
    id: 10,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 2000,
    priceNow: 800
  },
  {
    id: 12,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 3000
  },
  {
    id: 13,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 14,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 15,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 3000
  },
  {
    id: 16,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 17,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 18,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 19,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 51000
  }
];

const Home = () => (
  <div className="container">
    <main className="main">
      <ProductsCarousel title="Лідери продажу" products={data} />
      <div className="about-us">
        <div className="about-us-wrapper">
          <h1>Чому обирають нас</h1>
          <div className="about-us__container">
            <div className="about-us__container-item">
              <img src={concernLogo} alt="" />
              <h2>Вишуканість</h2>
              <p>
                Жодна подія у світі не залишилася поза увагою двох діячів
                натхнення. Ми їх любимо, ми їх знаємо – кава та чай – напої які
                творять історію. Створи свою історію!
              </p>
            </div>
            <div className="about-us__container-item">
              <img src={paymentLogo} alt="" />
              <h2>Чесна оплата</h2>
              <p>
                У нашому інтернет-магазині кави, можна дуже легко купити кави в
                зернах для кавомашин, кавоварок та альтернативи.
              </p>
            </div>
            <div className="about-us__container-item">
              <img src={assortementLogo} alt="" />
              <h2>Великий асортимент</h2>
              <p>
                У нас ви знайдете ексклюзивні сорти та суміші кави з усіх
                куточків світу. Ми вирушимо з Вами у захоплюючу подорож до
                країни «Кава».
              </p>
            </div>
            <div className="about-us__container-item">
              <img src={deliveyLogo} alt="" />
              <h2>Доставка по всьому світу</h2>
              <p>
                Ви можете отримати нашу продукцію в найкоротший термін у
                будь-яку точку земної кулі.
              </p>
            </div>
            <div className="about-us__container-item">
              <img src={garantineLogo} alt="" />
              <h2>Гарантія якості</h2>
              <p>
                Ми якісно підбираємо продукцію та особисто перевіряємо її
                смакові характеристики, достовірно створюємо опис для кожного
                товару.
              </p>
            </div>
            <div className="about-us__container-item">
              <img src={eleganceLogo} alt="" />
              <h2>Забота об окружающей среде</h2>
              <p>
                От 2 до 5% от стоимости каждого приобретенного товара в нашем
                магазине мы направляем на защиту.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);
export default Home;
