export const user = {
  login: localStorage.getItem('login') || '',
  isLoggedIn: Boolean(localStorage.getItem('login')),
};

export const courses = {
  courses: [],
  authors: [],
};
