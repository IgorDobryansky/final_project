import { combineReducers } from "redux";
import { merchandiseReducer as merchandise } from "./reducers/merchandise";
import basketReducer from "./basket/reducer";
// import catalogReducer from "./catalog/reducer";

const rootReducer = combineReducers({
  merchandise,
  basket: basketReducer
  // catalog: catalogReducer
});

export default rootReducer;
