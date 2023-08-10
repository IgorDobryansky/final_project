import { combineReducers } from "redux";

import productsReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer
});

export default rootReducer;
