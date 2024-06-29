import { userLogin } from "./auth/login";
import { userRegister } from "./auth/register";

export const api = {
  auth: {
    userLogin,
    userRegister,
  },
};
