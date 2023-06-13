import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/_home.scss";

const Home = () => (
  <div className="container">
    <Header />
    <main className="main">
      <Outlet />
      <div className="about-us">
        <div className="about-us-wrapper">
          <h1>Чому обирають нас</h1>
          <div className="about-us__container">
            <div className="about-us__container-item">a</div>
            <div className="about-us__container-item">s</div>
            <div className="about-us__container-item">e</div>
            <div className="about-us__container-item">r</div>
            <div className="about-us__container-item">t</div>
            <div className="about-us__container-item">y</div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
export default Home;
