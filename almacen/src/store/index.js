import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";
//import { purchaseProvisorySlice } from "./states/purches";

//acá esta como se crea la tienda

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    //product:
    //purches:
  },
});
//falta es deslogueo
export default store;
 