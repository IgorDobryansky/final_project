export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const CLEAR = "CLEAR";
// export const SET_PRODUCTS = "SET_PRODUCTS";

// export const setProduct = (itemNo) => ({
//   type: SET_PRODUCTS,
//   payload: itemNo
// });
export const removeProduct = (itemNo) => ({
  type: REMOVE_PRODUCT,
  payload: itemNo
});

export const addProduct = (itemNo) => ({
  type: ADD_PRODUCT,
  payload: itemNo
});

export const increaseCount = (itemNo) => ({
  type: INCREASE_COUNT,
  payload: itemNo
});

export const decreaseCount = (itemNo) => ({
  type: DECREASE_COUNT,
  payload: itemNo
});

export const clear = () => ({
  type: CLEAR
});
//
// export const removeProduct = (id) => ({
//   type: REMOVE_PRODUCT,
//   payload: id
// });
//
// export const increaseCount = (id) => ({
//   type: INCREASE_COUNT,
//   payload: id
// });
//
// export const decreaseCount = (id) => ({
//   type: DECREASE_COUNT,
//   payload: id
// });
//
// export const clear = () => ({
//   type: CLEAR
// });
