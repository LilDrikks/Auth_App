import { combineReducers, configureStore } from "@reduxjs/toolkit";
import aptos, { getAptos } from "./aptos";
import modal from "./modal";
import { logger } from "./logger";

const reducer = combineReducers({aptos, modal})

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(getAptos('https://deploy-node-lildrikks.vercel.app'))
export default store;
