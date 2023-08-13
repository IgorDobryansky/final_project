import { combineReducers } from "redux";
import basketReducer from "./basket/reducer";
import catalogReducer from "./catalog/reducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  catalog: catalogReducer
});

export default rootReducer;
