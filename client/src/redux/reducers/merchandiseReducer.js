/* eslint-disable default-param-last */
import types from "../types";

const initialState = {
  products: []
};

function merchandiseReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      };
    default:
      return state;
  }
}

export default merchandiseReducer;
