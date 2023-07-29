import { combineReducers } from "redux";
import basketReducer from "./basket/reducer";

const rootReducer = combineReducers({
  basket: basketReducer
});

export default rootReducer;
