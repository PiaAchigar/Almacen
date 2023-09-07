//Es para la Autenticación del Usuario
export async function loginService(email, password) {
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.status > 400) {
    throw data;
  }
  return data;
}
