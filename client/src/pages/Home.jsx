/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../styles/_home.scss";

import ProductsCarousel from "../components/productsCarousel/ProductsCarousel";

import assortementLogo from "../assets/images/home/assortment-logo.png";
import concernLogo from "../assets/images/home/concern-logo.png";
import deliveyLogo from "../assets/images/home/delivery-logo.png";
import eleganceLogo from "../assets/images/home/elegance-logo.png";
import garantineLogo from "../assets/images/home/garantine-logo.png";
import paymentLogo from "../assets/images/home/payment-logo.png";

import {
  fetchTopProducts,
  fetchNewProducts,
  fetchFeaturedProducts,
  fetchSaleProducts
} from "../redux/actions/productsActions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopProducts());
    dispatch(fetchNewProducts());
    dispatch(fetchFeaturedProducts());
    dispatch(fetchSaleProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <main className="main">
        <ProductsCarousel
          title="Лідери продажу"
          products={products.topProducts}
        />
        <ProductsCarousel title="Новинки" products={products.newProducts} />
        <ProductsCarousel
          title="Ми рекомендуємо"
          products={products.featuredProducts}
        />
        <ProductsCarousel title="Знижки" products={products.saleProducts} />
        <div className="about-us">
          <div className="about-us-wrapper">
            <h1>Чому обирають нас</h1>
            <div className="about-us__container">
              <div className="about-us__container-item">
                <img src={concernLogo} alt="" />
                <h2>Вишуканість</h2>
                <p>
                  Жодна подія у світі не залишилася поза увагою двох діячів
                  натхнення. Ми їх любимо, ми їх знаємо – кава та чай – напої
                  які творять історію. Створи свою історію!
                </p>
              </div>
              <div className="about-us__container-item">
                <img src={paymentLogo} alt="" />
                <h2>Чесна оплата</h2>
                <p>
                  У нашому інтернет-магазині кави, можна дуже легко купити кави
                  в зернах для кавомашин, кавоварок та альтернативи.
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
}
export default Home;
