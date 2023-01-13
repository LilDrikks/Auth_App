import { combineReducers, configureStore } from "@reduxjs/toolkit";
import aptos from "./reducers/aptos";
import localStorage from "./reducers/localStorage";
import modal from "./reducers/modal";
import signIn from "./reducers/signIn";

const reducer = combineReducers({aptos, modal, signIn})

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage),
});

export default store;
