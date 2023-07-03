import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import Cards from "../components/listCards/Cards";
import Search from "../components/search/Search";
import Select from "../components/select/Select";
import "../styles/_catalog.scss";

const data = [
  {
    id: 1,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 2000,
    priceNow: 800
  },
  {
    id: 2,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 3000
  },
  {
    id: 3,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 4,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 5,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 3000
  },
  {
    id: 6,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 7,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 8,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 9,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 5000
  },
  {
    id: 10,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 2000,
    priceNow: 800
  },
  {
    id: 12,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 3000
  },
  {
    id: 13,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 14,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 15,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 3000
  },
  {
    id: 16,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 17,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 18,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceOld: 1000,
    priceNow: 800
  },
  {
    id: 19,
    img: "https://wake-up.coffee/wp-content/uploads/2020/10/gotovo-min-1-1.jpg",
    name: "В`єтнамська кава (300 г)",
    priceNow: 51000
  }
];

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      const res = data;
      // getProducts повинна бути асинхронна функція що по АРІ витягує результат в RES
      setProducts(res);
      setLoading(false);
    };

    getProducts();
  }, []);

  const lastProductsIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductsIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductsIndex);

  return (
    <div className="catalog">
      <div className="link_nav_catalog">
        <Link to="/final_project/home" className="general_link">
          Головна
        </Link>
        <span> / </span>
        <Link to="/final_project/catalog" className="catalog_link">
          Каталог
        </Link>
      </div>
      <h2 className="page__title">Каталог</h2>
      <div className="form">
        <Search />
        <Select />
      </div>
      <hr className="line" />
      <div className="cards-list__wrapper">
        <Cards products={currentProducts} loading={loading} />
        <div className="sidebar" />
      </div>
      <Pagination
        count={4}
        onChange={(_, num) => setCurrentPage(num)}
        variant="outlined"
        shape="rounded"
      />
      <Outlet />
    </div>
  );
};
export default Catalog;
