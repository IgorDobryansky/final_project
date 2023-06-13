import React from "react";

import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  return <h2>Product {productId}</h2>;
}
export default Product;
