/* eslint-disable default-param-last */
import { merchandiseTypes } from "../types";

const initialState = {
  products: []
};

export function merchandiseReducer(state = initialState, action) {
  switch (action.type) {
    case merchandiseTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      };
    default:
      return state;
  }
}