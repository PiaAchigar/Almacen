import { getSession } from "../utils/session";
//tengo que hacer la fn GET/products - GET/products:id - PUT/products:id - DELETE/products:id
//import { setProducts } from "./productSlice";

export async function fetchProducts({pageNumber,size}) {
  try {
    const token = getSession();
    //console.log(token);
    //localhost:3001/products?page=2&size=3
    const response = await fetch(`http://localhost:3001/products?page=${pageNumber}&size=${size}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await response.json();
    //console.log(data.products);
    return data;
  } catch (err) {
    return null;
  }
}
export async function createProductService(product) {
  try {
    console.log("entro a product.service.js - createProductService")
    const token = getSession();
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    return null;
  }
}

export async function updateProductByCode(productCode, updatedProduct) {
  try {
    const token = getSession();
    const response = await fetch(`http://localhost:3001/products/${productCode}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
}

export async function deleteProduct(productId) {
  try {
    const token = getSession();
    const response = await fetch(`http://localhost:3001/products/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
}