import api from "../../http/api";
import types from "../types";

export function getAllProducts(products) {
  return {
    type: types.GET_ALL_PRODUCTS,
    payload: {
      products
    }
  };
}

export const getProductsArray = (page) => async (dispatch) => {
  try {
    const data = await api
      .get(`/products/?perPage=12&startPage=${page}`)
      .then((products) => products);
    console.log(data.data);
    dispatch(getAllProducts(data.data));
  } catch (error) {
    console.log(error);
  }
};

export const SortingProductsArray = (page, sort) => async (dispatch) => {
  try {
    const data = await api
      .get(`/products/?perPage=12&startPage=${page}&sort=${sort}currentPrice`)
      .then((products) => products);
    console.log(data.data);
    dispatch(getAllProducts(data.data));
  } catch (error) {
    console.log(error);
  }
};

// приклад для фільтру тільки на сторінках(https://youtu.be/34Wyw5155v4?t=6880)

// обране (на перспективу)

// export function addProductToFavorite(product) {
//   return {
//     type: merchandiseTypes.ADD_PRODUCT_TO_FAVORITE,
//     payload: {
//       product,
//     },
//   };
// }

// export function removeProductFromFavorite(article) {
//   return {
//     type: merchandiseTypes.REMOVE_PRODUCT_FROM_FAVORITE,
//     payload: {
//       article,
//     },
//   };
// }
