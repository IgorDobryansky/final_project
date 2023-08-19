import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { composeEnhancers, middleware } from "./middleware";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };

// import { createStore, applyMiddleware } from "redux";
//
// import rootReducer from "./rootReducer";
//
// import { composeEnhancers, middleware } from "./middleware";
//
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(...middleware))
// );
//
// export default store;
