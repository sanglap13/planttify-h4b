import axios from "axios";
import { Endpoint, Headers, Params, Payload } from "../../@types/api/api.types";

// https://hack4bengal-427818.df.r.appspot.com/api/v1/auth/login
// https://hack4bengal-427818.df.r.appspot.com/api/v1/auth/register
export const url = "https://hack4bengal-427818.df.r.appspot.com";
// export const port = "8989";
export const version = "v1";

const get = async (
  endpoint: Endpoint,
  headers: Headers,
  params: Params = {}
) => {
  try {
    const response = await axios.get(`${url}/api/${version}/${endpoint}`, {
      headers,
      params,
    });
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const post = async (endpoint: Endpoint, payload: Payload, headers: Headers) => {
  try {
    const response = await axios.post(
      `${url}/api/${version}/${endpoint}`,
      payload,
      {
        headers,
      }
    );
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const put = async (endpoint: Endpoint, payload: Payload, headers: Headers) => {
  try {
    const response = await axios.put(
      `${url}/api/${version}/${endpoint}`,
      payload,
      {
        headers,
      }
    );
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const patch = async (
  endpoint: Endpoint,
  payload: Payload,
  headers: Headers
) => {
  try {
    const response = await axios.patch(
      `${url}/api/${version}/${endpoint}`,
      payload,
      {
        headers,
      }
    );
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const del = async (endpoint: Endpoint, headers: Headers) => {
  try {
    const response = await axios.delete(`${url}/api/${version}/${endpoint}`, {
      headers,
    });
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const request = {
  fetch,
  get,
  post,
  put,
  patch,
  del,
};
