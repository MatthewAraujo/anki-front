import { getCookie } from "./auth.server";

export const getUserId = async () => {
  const userToken = await getCookie("userToken");
  if (!userToken) {
    return null;
  }
  const decoded = decodeJWT(userToken);
  return decoded.userID;
}

const decodeJWT = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));


  return JSON.parse(jsonPayload);
}