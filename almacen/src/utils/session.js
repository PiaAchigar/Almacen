const tokenkey = "token";

export const persistSession = (token) =>
  window.sessionStorage.setItem(tokenkey, token);

export const getSession = () => window.sessionStorage.getItem(tokenkey);

export const removeSession = () => window.sessionStorage.removeItem(tokenkey);
