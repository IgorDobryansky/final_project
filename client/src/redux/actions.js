export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id
});

export const increaseCount = (id) => ({
  type: INCREASE_COUNT,
  payload: id
});

export const decreaseCount = (id) => ({
  type: DECREASE_COUNT,
  payload: id
});
