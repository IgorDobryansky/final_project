import { combineReducers } from "redux";
import basketReducer from "./reducer";

const rootReducer = combineReducers({
  basket: basketReducer
});

export default rootReducer;
