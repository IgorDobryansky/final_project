import React from "react";

import {useForm} from "react-hook-form";
import ScrollOrder from "../scrollOrder/ScrollOrder";
import OrderHeader from "../orderHeader/OrderHeader";

function Form() {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form_left">
          <OrderHeader/>
          <div className="main">
        <span className="span">
          <p>1</p>
        </span>
            <h6>Особисті дані</h6>
          </div>
          <div className="input_text">
            <div>
              <div>
                <input
                  placeholder="Імя"
                  {...register("name", {required: true})}
                />
                {errors.name && <span>Це поле обовязкове</span>}
              </div>

              <div>
                <input
                  placeholder="Прізвище"
                  {...register("lastname", {required: true})}
                />
                {errors.name && <span>Це поле обовязкове</span>}
              </div>

              <div>
                <input
                  placeholder="Телефон"
                  {...register("phone", {required: true})}
                />
                {errors.phone && <span>Це поле обовязкове</span>}
              </div>
            </div>
            <div>
              <div>
                <input
                  placeholder="E-mail"
                  {...register("email", {required: true})}
                />
                {errors.phone && <span>Це поле обовязкове</span>}
              </div>

              <div>
                <input
                  placeholder="Країна"
                  {...register("country", {required: true})}
                />
                {errors.country && <span>Це поле обовязкове</span>}
              </div>

              <div>
                <input
                  placeholder="Місто"
                  {...register("city", {required: true})}
                />
                {errors.country && <span>Це поле обовязкове</span>}
              </div>
            </div>
          </div>
          <div className="hr"/>
          <div>
            <div className="main">
              <span className="span">
                <p>2</p>
              </span>
            </div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="self-pickup">Доставка:</label>
            <label className="radio_btn" htmlFor="self-pickup">
              <input
                type="radio"
                {...register("delivery", {required: true})}
                value="self-pickup"
                id="self-pickup"
              />
              <p className="radio_btn_title">Самовивіз</p>
              <p className="radio_btn_text">
                Ви можете забрати з нашого офіційного магазину за адресою Бажана
                8-Б, Київ, 02132 Україна
              </p>
            </label>
            <label className="radio_btn" htmlFor="nova-poshta">
              <input
                type="radio"
                {...register("delivery", {required: true})}
                value="post"
                id="nova-poshta"
              />
              <p className="radio_btn_title">Нова Пошта</p>
            </label>
            <label className="radio_btn" htmlFor="courier">
              <input
                type="radio"
                {...register("delivery", {required: true})}
                value="courier"
                id="courier"
              />
              Курєр
            </label>
            {errors.delivery && <span>Це поле обовязкове</span>}
          </div>
          <div className="hr"/>
          <div>
            <div className="main">
              <span className="span">
                <p>3</p>
              </span>
            </div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Оплата:</label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="radio_btn">
              <input
                type="radio"
                {...register("payment", {required: true})}
                value="upon-receipt"
              />
              При отриманні
            </label>
            <label className="radio_btn">
              <input
                type="radio"
                {...register("payment", {required: true})}
                value="online-payment"
              />
              Онлайн-оплата карткою
            </label>
            {errors.delivery && <span>Це поле обовязкове</span>}
          </div>
        </div>
        <div className="form_right">
        <ScrollOrder/>
        <button type="submit">Відправити</button>
          </div>
      </form>
    </>
  );
}

export default Form;
