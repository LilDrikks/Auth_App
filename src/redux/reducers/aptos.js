import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const aptos = createSlice({
  name: "aptos",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchError, fetchStarted, fetchSuccess } = aptos.actions;

export default aptos.reducer;

export const getAptos = (url) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const res = await axios.get(`${url}/user/aptos`);
    await dispatch(fetchSuccess(res.data));
    return res.data;
  } catch (err) {
    await dispatch(fetchError(err.message));
    return err.response.data.err;
  }
};
