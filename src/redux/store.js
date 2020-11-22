export const user = {
  login: localStorage.getItem('login') || '',
  isLoggedIn: Boolean(localStorage.getItem('login')),
};
