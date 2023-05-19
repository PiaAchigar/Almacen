import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { loginService } from "../../services/auth.service";

const tokenkey = "token";

const persistSession = (token) =>
  window.sessionStorage.setItem(tokenkey, token);

const getSession = () => window.sessionStorage.getItem(tokenkey);

const removeSession = () => window.sessionStorage.removeItem(tokenkey);

const initialState = () => {
  const token = getSession();
  return {
    token,
    data: token ? jwt_decode(token) : {},
    status: token ? "logged" : "unlogged", // logged, unlogged, loading
    error: null,
  };
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => loginService(email, password)
  //de acá sale el state que uso en la f(x) extraReducers
);

export const userSlice = createSlice({
  name: "user",
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

export const { logout } = userSlice.actions;

export default userSlice.reducer;
