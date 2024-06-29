const auth = {
  Authorization: "Authorization",
  Bearer: "Bearer",
};

const { Bearer } = auth;

export type Endpoint = string;
export type Params = Record<string, unknown>;

type AuthHeader = {
  Authorization: `${typeof Bearer} ${string}`;
};

export type Payload = any;

export type Headers = {
  "Content-Type": string;
  "Access-Control-Allow-Origin": string;
};
