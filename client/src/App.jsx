import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Thanks from "./pages/Thanks";
import Order from "./pages/Order";
import Basket from "./pages/Basket";
import RegisterForm from "./pages/Register";
import LoginForm from "./pages/Login";
import Product from "./components/product/Product";
import { addProduct } from "./redux/basket/actions";

const App = () => {
  const dispatch = useDispatch();
  const handleAddProduct = (itemNo) => {
    dispatch(addProduct(itemNo));
  };
  const productsArray = useSelector((state) => state.basket.productsArray);
  try {
    fetch("http://localhost:4000/api/products").then((responseData) => {
      responseData.json().then((products) => {
        if (productsArray.length === 0) {
          for (let i = 0; i < 9; i += 1) {
            dispatch(addProduct(products[i]));
          }
        }
      });
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <Header />
      <div>
        <button onClick={handleAddProduct} type="button">
          Add product to card
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="catalog/" element={<Catalog />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="delivery" element={<Delivery />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="basket" element={<Basket />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
