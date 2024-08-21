export const getToken = () => {
  const token = localStorage.getItem('jwtToken');
  return token;
};

export const setToken = (token: string) => {
  localStorage.setItem('jwtToken', token);
};

export const removeToken = () => {
  localStorage.removeItem('jwtToken');
};
