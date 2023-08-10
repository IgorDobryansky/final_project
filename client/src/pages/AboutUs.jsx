import React from "react";
import { Link } from "react-router-dom";
import mask from "../assets/images/aboutUs/mask.png";
import pngcof from "../assets/images/aboutUs/pngcof.png";
import nature2 from "../assets/images/aboutUs/nature2.png";
import diamond from "../assets/images/aboutUs/diamond.png";
import hands from "../assets/images/aboutUs/hands.png";
import shape from "../assets/images/aboutUs/shape.png";

const AboutUs = () => (
  <div className="container_about">
    <div className="wrapper_about">
      <div className="about_header">
        <div>
          <div className="link_nav_about">
            <Link to="/home" className="general_link">
              Головна
            </Link>
            <span> / </span>
            <Link to="/aboutUs" className="basket_link">
              Про нас
            </Link>
          </div>
          <div className="about_text">
            <h3>Про нас</h3>
            <span className="hr" />
            <p>&ldquo;Ми вчимо насолоджуватися кожною хвилиною&rdquo;</p>
          </div>
          <div className="about_mask">
            <p>Степан Бандера</p>
            <img src={mask} alt="img" />
          </div>
        </div>
        <div className="about_img">
          <img src={pngcof} alt="img" />
        </div>
      </div>
    </div>
    <div className="about_count">
      <div className="about_count_left">
        <h6>Наші клієнти</h6>
        <p>
          Ми вимогливі до себе, щоб кожен день ставати кращими для наших
          клієнтів і знаходити кращі рішення для кожного з них.
        </p>
      </div>
      <div className="about_count_right">
        <h6>Лічильник клієнтів</h6>
        <p className="nature">12346</p>
      </div>
    </div>
    <div className="about_main">
      <p className="about_main_tittle">COPPER PRO</p>
      <div className="about_main_wrapper">
        <h5>Наша історія</h5>
        <div className="about_main_text">
          <p>
            Якщо ви не уявляєте свого життя без ароматних гарячих напоїв то вам
            з нами по дорозі! Асортимент інтернет-магазину представлений
            найкращими сортами зернової кави. Вибираючи продукцію в нашому
            інтернет-магазині, ви можете швидко здійснити покупку. Ми не
            прагнемо продати якнайбільше. Наша мета - щоб ви отримали насолоду
            від гарячого напою, а його вибір був максимально простим і не забрав
            зайвого часу. У 1912 році двома любителями кави була заснована
            кав&lsquo;ярня. У невеликому приміщенні панувала атмосфера
            свіжозвареної кави, турботи про кожного відвідувача та любові до
            своєї справи. Кількість кав&lsquo;ярень зростала, зростала й
            кількість міст та країн, в яких ми дотримуємося принципів якості, та
            бездоганності, щоб кожен ковток ароматного напою дарував сил,
            натхнення та ставав частиною вашого життя.
          </p>
          <p>
            Справді, уявити свій ранок без кави не можуть тисячі людей по всьому
            світу. А все чому? Одні називають цей смачний напій звичкою - вони
            впевнені, що кава викликає залежність. Інші частуються філіжанкою
            кавусі у затишній кав&lsquo;ярні, тоді ця ароматна спокусниця
            виконує роль зв&lsquo;язкового елементу у розмові: чи то побачення,
            а чи, може, теревені з подругами. А ще із запрошення &ldquo;на
            горнятко кави&rdquo; починалися безліч стосунків, частина яких
            закінчувалася шлюбом. І хоч є люди, які абсолютно байдуже ставляться
            до цього напою, каву оспівують у піснях, співають їй
            &ldquo;серенади&rdquo;, пишуть про неї вірші, каву зображують на
            картинах…
          </p>
        </div>
      </div>
    </div>
    <div className="about_footer">
      <img className="nature2" src={nature2} alt="img" />
      <div className="about_footer_right">
        <h6>Наші цінності</h6>
        <p>
          Наше виробництво знаходиться в Україні, але клієнти більш ніж з 50
          країн радіють товарам, придбаним у нашому магазині.
        </p>
        <div className="about_footer_text">
          <img src={shape} alt="img" />
          <p>оперативність</p>
        </div>
        <div className="about_footer_text">
          <img src={diamond} alt="img" />
          <p>якісний сервіс</p>
        </div>
        <div className="about_footer_text">
          <img src={hands} alt="img" />
          <p>турбота про клієнта</p>
        </div>
      </div>
    </div>
  </div>
);
export default AboutUs;
