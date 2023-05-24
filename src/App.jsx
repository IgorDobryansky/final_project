import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Product from "./components/product/Product";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/final_project" element={<Home />}>
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="catalog/" element={<Catalog />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="delivery" element={<Delivery />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
