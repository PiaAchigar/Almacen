//Utilizo éste Redux(productSlice) (o gestor de estado de productos) con el "useSelector" lo recupero desde otro componente
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts,
  createProductService,
} from "../../services/product.service";

const initialState = () => {
  // products, totalItems, totalPages: Math.ceil(totalItems / size), page}
  return {
    products: [],
    totalItems: 0,
    totalPages: 0,
    page: 1,
    error: null,
    loading: true,
  };
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async ({ pageNumber, size }) => {
    const response = await fetchProducts({ pageNumber, size });
    return response;
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product) => {
    console.log("entro a product.js - createProduct");
    const response = await createProductService(product); //no se ejecuta ésta linea
    console.log(response);
    return response;
  }
);

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
      state.products = action.payload.products;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.loading = false;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.products = [];
      state.totalItems = 0;
      state.totalPages = 0;
      state.page = 1;
      state.loading = false;
      state.error = "Hubo un error al solicitar los productos";
    });
  },
});

export default productSlice.reducer;

//Redux es una librería para controlar el estado de nuestras aplicaciones web fácilmente, de una forma consistente entre cliente y servidor, testeable y con una gran experiencia de desarrollo. Redux está en gran parte influenciado por la arquitectura Flux propuesta por Facebook para las aplicaciones de React.

//Serán los ficheros en los que tendremos la lógica de cada estado individual y que pasaremos al store más adelante