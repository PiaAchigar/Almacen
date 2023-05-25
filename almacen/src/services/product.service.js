import { getSession } from "../utils/session";
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
