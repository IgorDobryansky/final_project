import React from "react";
import { Outlet } from "react-router-dom";

const Catalog = () => (
  <>
    <h2>Catalog</h2>
    <Outlet />
  </>
);
export default Catalog;
