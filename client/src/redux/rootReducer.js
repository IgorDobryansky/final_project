import { combineReducers } from "redux";
import basketReducer from "./reducer";
import { merchandiseReducer as merchandise } from "./reducers/merchandise";

const rootReducer = combineReducers({
  merchandise,
  basket: basketReducer
});

export default rootReducer;
