import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Product from "./components/product/Product";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";
import Basket from "./pages/Basket";
import Thanks from "./pages/Thanks";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/final_project" element={<Outlet />}>
        <Route path="" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="catalog/" element={<Catalog />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="delivery" element={<Delivery />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="basket" element={<Basket />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="order" element={<Order />} />
      </Route>
    </Routes>
    <Footer />
  </div>
);
export default App;
