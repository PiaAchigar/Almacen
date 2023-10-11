//Es para la Autenticación del Usuario
export async function loginService(email, password) {
//   35.160.120.126
// 44.233.151.27
// 34.211.200.85
  const response = await fetch("http://35.160.120.126/login", {
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
