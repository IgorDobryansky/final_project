import React from "react";
import "../styles/_login.scss";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }
  });
  return (
    <div>
      <Link to="/">
        <button type="submit" className="button-to-main">
          Назад на головну
        </button>
      </Link>
      <div className="container">
        <form className="login-form" autoComplete="off">
          <h1 className="login-h1">Авторизація</h1>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            type="email"
            placeholder="E-mail"
            onBlur={formik.handleBlur}
            className="login-input"
          />
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            id="password"
            type="password"
            placeholder="Пароль"
            onBlur={formik.handleBlur}
            className="login-input"
          />
          <p className="forgot-password">Забули пароль?</p>

          <button type="submit" className="login-button">
            Увійти
          </button>

          <div className="footer-form">
            <p className="footer-form__text">Не маєш аккаунт?</p>
            <Link to="/register">
              <p className="footer-form__text">Реєстрація</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
