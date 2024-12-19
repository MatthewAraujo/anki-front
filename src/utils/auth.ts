import Cookies from 'js-cookie';

export const setAuthCookie = (key: string, value: string, expiresDays: number = 7) => {
  Cookies.set(key, value, { expires: expiresDays });
};
const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};


export const removeAuthCookie = (key: string) => {
  Cookies.remove(key);
};


export const isUserAuthenticated = (): boolean => {
  const token = getCookie('userToken');
  return Boolean(token);
};