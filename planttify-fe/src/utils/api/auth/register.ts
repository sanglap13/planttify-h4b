import { Payload } from "../../../@types/api/api.types";
import { MESSAGE } from "../../../constants/message";
import { request } from "../api";

const { post } = request;

const initialRoute = "/auth";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const userRegister = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/register`;
    const response = await post(endpoint, payload, {
      ...headers,
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.post.succAuth) {
        const {
          data: { result },
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: unknown) {
    console.log(error);
    alert("Registration failed");
    throw error;
  }
};
