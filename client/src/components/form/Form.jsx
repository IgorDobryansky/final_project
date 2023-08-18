import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { useSelector } from "react-redux";
import ScrollOrder from "../scrollOrder/ScrollOrder";
import OrderHeader from "../orderHeader/OrderHeader";
import delivery from "../../assets/images/basket/delivery.png";

const Form = () => {
  const productsArray = useSelector((state) => state.basket.productsArray);
  const promoData = [
    {
      id: 1,
      title: "PROMO20",
      sum: 20,
      count: 10
    },
    {
      id: 2,
      title: "PROMO30",
      sum: 30,
      count: 5
    }
  ];

  const [selectedPromo, setSelectedPromo] = useState("");
  const [orderNo, setOrderNo] = useState();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm();
  const usePromo = (e) => {
    // console.log(getValues().promo);
    e.preventDefault();
    const promoCode = getValues().promo;
    const promoItem = promoData.find((promo) => promo.title === promoCode);

    // console.log(promoItem);
    if (promoItem) {
      setSelectedPromo(`${promoItem.sum}`);
    } else if (promoItem === undefined) {
      setSelectedPromo(undefined);
    }
  };

  const watchPromo = watch("promo");

  const getTotalPrice = () => {
    if (!productsArray || productsArray.length === 0) {
      return 0;
    }
    const totalPrice = productsArray.reduce(
      (acc, { product, cartQuantity }) =>
        acc + product.currentPrice * cartQuantity,
      0
    );
    if (selectedPromo) {
      return (totalPrice - (totalPrice / 100) * selectedPromo).toFixed(2);
    }
    return totalPrice.toFixed(2);
  };

  const onSubmit = (data) => {
    if (!productsArray || productsArray.length === 0) {
      console.error("The list of products is required, but absent!");
      return;
    }
    const formData = {
      name: data.name,
      lastname: data.lastname,
      mobile: data.mobile,
      email: data.email,
      country: data.country,
      city: data.city,
      delivery: data.delivery,
      payment: data.payment,
      promo: data.promo,
      orderNo: data.orderNo,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml: `<h1>Your order is placed. Your order was successful!. You are welcome!</h1><p>{Other details about order in your HTML}</p>`
    };

    const orderData = {
      ...formData,

      products: productsArray

      // products: productsArray.map((product) => ({
      //   canceled: false,
      //   _id: product.product._id,
      //   product: {
      //     name: product.product.name,
      //     price: product.product.currentPrice,
      //     quantity: product.product.quantity,
      //   },
      //   cartQuantity: product.cartQuantity,
      // })),
    };

    // dispatch(clear());
    // console.log(orderData);
    // console.log(orderData.cartQuantity);

    fetch("http://localhost:4000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((dataFetch) => {
        setOrderNo(dataFetch.order.orderNo);
        // console.log(orderNo);
        // console.log(dataFetch);
        // console.log(dataFetch.order.orderNo);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form_left">
        <OrderHeader />
        <div className="input_text">
          <div className="input_center">
            <div className="label_flex">
              <p>1</p> Особисті дані:
            </div>
            <div className="span_flex">
              <input
                placeholder="Імя"
                {...register("name", { required: true })}
              />
              {errors.name && <span>*Це поле обовязкове</span>}
            </div>

            <div className="span_flex">
              <input
                placeholder="Прізвище"
                {...register("lastname", { required: true })}
              />
              {errors.name && <span>*Це поле обовязкове</span>}
            </div>

            <div className="span_flex">
              <input
                placeholder="Телефон"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>*Це поле обовязкове</span>}
            </div>
          </div>
          <div>
            <div className="span_flex">
              <input
                placeholder="E-mail"
                {...register("email", { required: true })}
              />
              {errors.email && <span>*Це поле обовязкове</span>}
            </div>

            <div className="span_flex">
              <input
                placeholder="Країна"
                {...register("country", { required: true })}
              />
              {errors.country && <span>*Це поле обовязкове</span>}
            </div>

            <div className="span_flex">
              <input
                placeholder="Місто"
                {...register("city", { required: true })}
              />
              {errors.country && <span>*Це поле обовязкове</span>}
            </div>
          </div>
        </div>
        <div className="hr" />
        <div className="block_center_m">
          <div htmlFor="delivery" className="label_flex">
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
          {errors.delivery && <span>*Це поле обовязкове</span>}
        </div>
        <div className="hr" />
        <div className="block_center_m block_center_pay">
          <div className="label_flex">
            <p>3</p>Оплата:
          </div>
          <label className="radio_btn" htmlFor="upon-receipt">
            <input
              type="radio"
              {...register("payment", { required: true })}
              value="upon-receipt"
              id="upon-receipt"
            />
            <p className="radio_btn_title">При отриманні</p>
          </label>
          <label className="radio_btn" htmlFor="online-payment">
            <input
              type="radio"
              {...register("payment", { required: true })}
              value="online-payment"
              id="online-payment"
            />
            <p className="radio_btn_title"> Онлайн-оплата карткою</p>
          </label>
          {errors.delivery && <span>*Це поле обовязкове</span>}
        </div>
      </div>
      <div className="form_right">
        <ScrollOrder />
        <div className="together">
          <div className="together_container">
            <div>
              <input
                placeholder="Введіть промокод"
                {...register("promo", { required: false })}
              />
              <button
                className="btn_promo"
                type="submit"
                onClick={usePromo}
                disabled={!watchPromo || watchPromo.length === 0}
              >
                Застосувати
              </button>
              {selectedPromo === undefined && (
                <p className="promo_select">Промокод не дійсний</p>
              )}
              {selectedPromo && (
                <p className="promo_select">
                  - {selectedPromo} % знижки по Вашому промокоду
                </p>
              )}
            </div>
            {promoData.length > 0 ? (
              <div>
                <p className="together_text">Разом</p>
                <p className="together_price"> {getTotalPrice()} грн</p>
              </div>
            ) : (
              <>
                <p className="together_text">Разом</p>
                <p className="together_price"> {getTotalPrice()} грн</p>
              </>
            )}
            {orderNo && (
              <div className="popup">
                <p style={{ color: "red" }}>
                  Номер вашого замовлення: {orderNo}
                </p>
              </div>
            )}
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
