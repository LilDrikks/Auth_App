import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const edit = createSlice({
  name: "editMorador",
  initialState: {
    apto: null,
    bloco: null,
    nome: null,
    id: null,
    data: null
  },
  reducers: {
    getData: (state, action) => {
      const { payload } = action;
      state.apto = payload.apto;
      state.bloco = payload.bloco;
      state.nome = payload.nome;
      state.id = payload.id;
    },
    putData: (state, action) => {
      state.data = action.payload
    }
  },
});

export const { getData, putData } = edit.actions;

export default edit.reducer;


export const fetchUpdate = ({ apto, bloco, id, nome, token }) => async (dispatch) => {
  const body = { apto, bloco, id, nome, token }

  try {
    const res = await axios.put('https://deploy-node-lildrikks.vercel.app/user/aptos/update/morador', body)
    await dispatch(putData(res.data.data))
  } catch (error) {
    await dispatch(putData(error.message))
  }
}

export const fetchAddNewMorador = ({apto, bloco, nome, token}) => async (dispatch) => {
  const body = { apto, bloco, nome, token }

  try {
    const res = await axios.put('https://deploy-node-lildrikks.vercel.app/user/aptos/add/morador', body)
    await dispatch(putData(res.data.data))
  } catch (error) {
    await dispatch(putData(error.message))
  }
}

export const fetchRemoveMorador = ({apto, bloco, nome, token}) => async (dispatch) => {
  const body = { apto, bloco, nome, token }

  try {
    const res = await axios.put('https://deploy-node-lildrikks.vercel.app/user/aptos/remove/morador', body)
    await dispatch(putData(res.data.data))
  } catch (error) {
    await dispatch(putData(error.message))
  }
}
