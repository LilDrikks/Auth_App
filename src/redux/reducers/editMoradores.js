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


export const fetchUpdate = ({ apto, bloco, id, nome }) => async (dispatch) => {
  const body = { apto:apto, bloco:bloco, id:id, nome:nome }

  try {
    const res = await axios.put('https://deploy-node-lildrikks.vercel.app/user/aptos', body)
    await dispatch(putData(res.data))
  } catch (error) {
    await dispatch(putData(error.message))
  }
}
