import types from "./types";

// CAROUSEL
export const getTopProducts = (products) => ({
  type: types.GET_TOP_PRODUCTS,
  payload: products
});

export const getNewProducts = (products) => ({
  type: types.GET_NEW_PRODUCTS,
  payload: products
});

export const getFeaturedProducts = (products) => ({
  type: types.GET_FEATURED_PRODUCTS,
  payload: products
});

export const getSaleProducts = (products) => ({
  type: types.GET_SALE_PRODUCTS,
  payload: products
});

// BASKET
export const removeProduct = (id) => ({
  type: types.REMOVE_PRODUCT,
  payload: id
});

export const increaseCount = (id) => ({
  type: types.INCREASE_COUNT,
  payload: id
});

export const decreaseCount = (id) => ({
  type: types.DECREASE_COUNT,
  payload: id
});
