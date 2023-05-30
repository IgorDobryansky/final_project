import React from "react";

import { useParams } from "react-router-dom";
import Card from "../Card";

function Product() {
  const { productId } = useParams();
  return <Card/>;
}
export default Product;
