/* eslint-disable default-param-last */
import types from "../types"; // Импортируйте типы действий

const initialState = {
  topProducts: [],
  newProducts: [],
  featuredProducts: [],
  saleProducts: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TOP_PRODUCTS:
      return {
        ...state,
        topProducts: action.payload
      };

    case types.GET_NEW_PRODUCTS:
      return {
        ...state,
        newProducts: action.payload
      };

    case types.GET_FEATURED_PRODUCTS:
      return {
        ...state,
        featuredProducts: action.payload
      };

    case types.GET_SALE_PRODUCTS:
      return {
        ...state,
        saleProducts: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
