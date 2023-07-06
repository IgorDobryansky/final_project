import React from "react";
import "../styles/_register.scss";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
        <form className="register-form" autoComplete="off">
          <h1 className="registration-h1">Реєстрація</h1>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            type="email"
            placeholder="E-mail"
            onBlur={formik.handleBlur}
            className="registration-input"
          />
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            id="password"
            type="password"
            placeholder="Пароль"
            onBlur={formik.handleBlur}
            className="registration-input"
          />
          <input
            // value={formik.values.password}
            // onChange={formik.handleChange}
            type="password"
            placeholder="Повторіть пароль"
            // onBlur={formik.handleBlur}
            className="registration-input"
          />

          <button type="submit" className="registration-button">
            Registration
          </button>

          <div className="footer-form">
            <p className="footer-form__text">Маєш аккаунт?</p>
            <Link to="/login">
              <p className="footer-form__text">Увійти</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
