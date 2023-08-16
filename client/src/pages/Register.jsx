import React from "react";
import "../styles/_register.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password", "");

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
          className="register-form"
          autoComplete="off"
        >
          <h1 className="registration-h1">Реєстрація</h1>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="registration-input"
              {...register("email", {
                required: "*Це поле обовязкове",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неправильний формат Email"
                }
              })}
            />
            {errors.email && (
              <span className="register-span">{errors.email.message}</span>
            )}
          </div>

          <div>
            <input
              placeholder="Пароль"
              type="password"
              {...register("password", {
                required: "*Це поле обовязкове",
                minLength: {
                  value: 8,
                  message: "Пароль повинен містити принаймні 8 символів"
                }
              })}
              className="registration-input"
            />
            {errors.password && (
              <span className="register-span">{errors.password.message}</span>
            )}
          </div>

          <div>
            <input
              placeholder="Повторіть пароль"
              type="password"
              {...register("confirmPassword", {
                required: "*Це поле обовязкове",
                validate: (value) =>
                  value === password || "Паролі повинні співпадати"
              })}
              className="registration-input"
            />
            {errors.confirmPassword && (
              <span className="register-span">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button type="submit" className="registration-button">
            Реєстрація
          </button>

          <div className="footer-form">
            <p className="footer-form__text">Маєш аккаунт?</p>
            <Link to="/final_project/login">
              <p className="footer-form__text">Увійти</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
