import { REMOVE_PRODUCT, INCREASE_COUNT, DECREASE_COUNT } from "./actions";
import productImage from "../assets/images/basket/product-image.png";

const initialState = {
  productsArray: [
    {
      id: 1,
      name: "Кава Melitta Bella Crema Bio (750 г), зерно",
      price: +Date.now().toString().slice(-4),
      oldPrice: 1231,
      image: productImage,
      count: 1
    },
    {
      id: 2,
      name: "Кава Melitta Bella Crema Bio (1000 г), зерно",
      price: +Date.now().toString().slice(-4),
      image: productImage,
      count: 1
    },
    {
      id: 3,
      name: "Кава Melitta Bella Crema Bio (1250 г), зерно",
      price: +Date.now().toString().slice(-4),
      image: productImage,
      count: 1
    },
    {
      id: 4,
      name: "Кава Melitta Bella Crema Bio (1500 г), зерно",
      price: +Date.now().toString().slice(-4),
      oldPrice: 1231,
      image: productImage,
      count: 1
    }
  ],
  isDeleting: false
};

// eslint-disable-next-line default-param-last
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:
      return {
        ...state,
        isDeleting: true,
        productsArray: state.productsArray.filter(
          (product) => product.id !== action.payload
        )
      };
    case INCREASE_COUNT:
      return {
        ...state,
        productsArray: state.productsArray.map((product) =>
          product.id === action.payload
            ? { ...product, count: product.count + 1 }
            : product
        )
      };
    case DECREASE_COUNT:
      return {
        ...state,
        productsArray: state.productsArray.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                count: Math.max(product.count - 1, 1)
              }
            : product
        )
      };
    default:
      return state;
  }
};

export default basketReducer;
