//Es para la Autenticación del Usuario
export async function loginService(email, password) {
//   35.160.120.126
// 44.233.151.27
// 34.211.200.85
//http://35.160.120.126:10000/login
//http://localhost:3001/login
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
console.log(response)
  const data = await response.json();

  if (response.status > 400) {
    throw data;
  }
  return data;
}
