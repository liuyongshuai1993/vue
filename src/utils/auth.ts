const LYS_TOKEN_KEY = "token";

const isLogin = () => {
  return !!localStorage.getItem(LYS_TOKEN_KEY);
};
const getToken = () => {
  return localStorage.getItem(LYS_TOKEN_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(LYS_TOKEN_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(LYS_TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken };
