import types from "../types";

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
