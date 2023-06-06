import { getSession } from "../utils/session";
//tengo que hacer la fn GET/products - GET/products:id - PUT/products:id - DELETE/products:id
//import { setProducts } from "./productSlice";

export async function fetchProducts() {
  try {
    const token = getSession();
    console.log(token);
    const response = await fetch("http://localhost:3001/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    return null;
  }
}
export async function createProductService(product) {
  try {
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
    return data;
  } catch (err) {
    return null;
  }
}
