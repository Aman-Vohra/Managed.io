import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import listReducers from "./listReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["lists"]
};

export default persistReducer(
  persistConfig,
  combineReducers({
    lists: listReducers
  })
);
