//24/05/23 no termino de entender ésto!
import jwt_decode from "jwt-decode";
//import {getSession, persistSession, removeSession} from '../../utils/session';
import { createSlice } from "@reduxjs/toolkit";
//import {login} from './user';

const initialState = () => {
  return {
    product,
    error: null,
  };
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.data = {};
      state.status = "unlogged";
      state.error = null;
      removeSession();
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      //fulfilled es que la promesa se complrtó
      state.status = "logged";
      state.token = action.payload.token;
      state.data = jwt_decode(action.payload.token); // Buffer.from(action.payload.token.split(".")[1]//(rompe), "base64"); // atob(action.payload.token.split(".")[1]) //(esta deprecado)
      //en data me queda guardado la info del usuario, lo que mando en ese token
      persistSession(action.payload.token);
      // window.location.href = "/principal";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "unlogged";
      state.error = "Credenciales invalidas";
    });
  },
});

export default productSlice.reducer;
