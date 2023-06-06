import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";
import { productSlice } from "./states/product";
//import { purchaseProvisorySlice } from "./states/purches";

//acá esta como se crea la tienda

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productSlice.reducer
    //purches:
  },
});
//falta es deslogueo
export default store;
 