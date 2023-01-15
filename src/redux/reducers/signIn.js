import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAptos } from "./aptos";
import getLocalStorage from "./getLocalStorage";

const signIn = createSlice({
  name: "signIn",
  initialState: {
    loading: false,
    data: null,
    error: null,
    meta: {
      localStorage: {
        key: "token",
        value: getLocalStorage("token", null),
      },
    },
  },
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.meta = {
        localStorage: {
          key: "token",
          value: action.payload.token,
        },
      };
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchError, fetchStarted, fetchSuccess } = signIn.actions;

export default signIn.reducer;

export const fetchSignIn = (email, password) => async (dispatch) => {
  const body = { email: email, password: password };
  try {
    dispatch(fetchStarted());
    const res = await axios.put(
      "https://deploy-node-lildrikks.vercel.app/user",
      body
    );
    await dispatch(fetchSuccess(res.data));
  } catch (err) {
    await dispatch(fetchError(err));
  }
};

export const autoLogin = () => async (dispatch, getState) => {
  const state = getState();
  const token = state.signIn.meta.localStorage.value;
  if (token) await dispatch(getAptos({token}));
};
