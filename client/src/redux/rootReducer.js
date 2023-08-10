import { combineReducers } from "redux";

import productsReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";
import { merchandiseReducer as merchandise } from "./reducers/merchandise";

const rootReducer = combineReducers({
  products: productsReducer,
  merchandise,
  basket: basketReducer
});

export default rootReducer;
