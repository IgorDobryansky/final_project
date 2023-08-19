import { combineReducers } from "redux";

import merchandiseReducer from "./reducers/merchandiseReducer";
import productsReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  merchandise: merchandiseReducer,
  products: productsReducer,
  basket: basketReducer
  // catalog: catalogReducer
});

export default rootReducer;
