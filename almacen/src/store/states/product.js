//Utilizo éste Redux(productSlice) (o gestor de estado de productos) con el "useSelector" desde otro componente
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product.service";

const initialState = () => {
  return {
    products: [],
    error: null,
  };
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await fetchProducts();
  return response;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //acciones realacionadas con la gestión de productos
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductById: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      state.products = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    },
  },
  extraReducers(builder) {
    //inicio del servicio
      builder.addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export default productSlice.reducer;
