import React from "react";
import "../styles/_login.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Link to="/final_project/">
        <button type="submit" className="button-to-main">
          Назад на головну
        </button>
      </Link>
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login-form"
          autoComplete="off"
        >
          <h1 className="login-h1">Авторизація</h1>
          <div>
            <input
              placeholder="E-mail"
              type="email"
              {...register("email", {
                required: "*Це поле обовязкове",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неправильний формат Email"
                }
              })}
              className="login-input"
            />
            {errors.email && (
              <span className="login-span">{errors.email.message}</span>
            )}
          </div>
          <div>
            <input
              placeholder="Пароль"
              type="password"
              {...register("password", {
                required: "*Це поле обовязкове"
              })}
              className="login-input"
            />
            {errors.password && (
              <span className="login-span">{errors.password.message}</span>
            )}
          </div>

          {/* <Link  className="forgot-password">Забули пароль?</Link> */}

          <button type="submit" className="login-button">
            Увійти
          </button>

          <div className="footer-form">
            <p className="footer-form__text">Не маєш аккаунт?</p>
            <Link to="/final_project/register">
              <p className="footer-form__text">Реєстрація</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
