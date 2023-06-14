import React from "react";
import { useForm } from "react-hook-form";

import ScrollOrder from "../scrollOrder/ScrollOrder";
import OrderHeader from "../orderHeader/OrderHeader";
import delivery from "../../assets/images/basket/delivery.png";

const Form = (props) => {
  const { items } = props;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form_left">
        <OrderHeader />
        <div className="input_text">
          <div>
            <div className="label_flex">
              <p>1</p> Особисті дані:
            </div>
            <div>
              <input
                placeholder="Імя"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Це поле обовязкове</span>}
            </div>

            <div>
              <input
                placeholder="Прізвище"
                {...register("lastname", { required: true })}
              />
              {errors.name && <span>Це поле обовязкове</span>}
            </div>

            <div>
              <input
                placeholder="Телефон"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>Це поле обовязкове</span>}
            </div>
          </div>
          <div>
            <div>
              <input
                placeholder="E-mail"
                {...register("email", { required: true })}
              />
              {errors.phone && <span>Це поле обовязкове</span>}
            </div>

            <div>
              <input
                placeholder="Країна"
                {...register("country", { required: true })}
              />
              {errors.country && <span>Це поле обовязкове</span>}
            </div>

            <div>
              <input
                placeholder="Місто"
                {...register("city", { required: true })}
              />
              {errors.country && <span>Це поле обовязкове</span>}
            </div>
          </div>
        </div>
        <div className="hr" />
        <div className="block_center_m">
          <div htmlFor="self-pickup" className="label_flex">
            <p>2</p>
            Доставка:
          </div>
          <label className="radio_btn" htmlFor="self-pickup">
            <input
              type="radio"
              {...register("delivery", { required: true })}
              value="self-pickup"
              id="self-pickup"
            />
            <p className="radio_btn_title">Самовивіз</p>
          </label>
          <p className="radio_btn_text">
            Ви можете забрати з нашого офіційного магазину за адресою Бажана
            8-Б, Київ, 02132 Україна
          </p>
          <label className="radio_btn" htmlFor="nova-poshta">
            <input
              type="radio"
              {...register("delivery", { required: true })}
              value="post"
              id="nova-poshta"
            />
            <p className="radio_btn_title">Нова Пошта</p>
          </label>
          <p className="radio_btn_text">
            Ви можете забрати з нашого офіційного магазину за адресою Бажана
            8-Б, Київ, 02132 Україна
          </p>
          <label className="radio_btn" htmlFor="courier">
            <input
              type="radio"
              {...register("delivery", { required: true })}
              value="courier"
              id="courier"
            />
            <p className="radio_btn_title">Курєр</p>
          </label>
          <p className="radio_btn_text">
            Ви можете забрати з нашого офіційного магазину за адресою Бажана
            8-Б, Київ, 02132 Україна
          </p>
          {errors.delivery && <span>Це поле обовязкове</span>}
        </div>
        <div className="hr" />
        <div className="block_center_m block_center_pay">
          <div className="label_flex">
            <p>3</p>Оплата:
          </div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="radio_btn">
            <input
              type="radio"
              {...register("payment", { required: true })}
              value="upon-receipt"
            />
            <p className="radio_btn_title">При отриманні</p>
          </label>
          <label className="radio_btn" htmlFor="payment">
            <input
              type="radio"
              {...register("payment", { required: true })}
              value="online-payment"
            />
            <p className="radio_btn_title"> Онлайн-оплата карткою</p>
          </label>
          {errors.delivery && <span>Це поле обовязкове</span>}
        </div>
      </div>
      <div className="form_right">
        <ScrollOrder items={items} />
        <div className="together">
          <div className="together_container">
            <div>
              <input
                placeholder="Введіть промокод"
                {...register("promo", { required: false })}
              />
              <button className="btn_promo" type="submit">
                Застосувати
              </button>
            </div>
            <p className="together_text">Разом</p>
            <p className="together_price">
              {items.reduce((acc, { price, id }) => acc + price * id, 0)} грн
            </p>
            <div className="together_img">
              <img className="img" alt="img" src={delivery} />
              <p>У вас є безкоштовна доставка!</p>
            </div>

            <button type="submit" className="btn_together">
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
