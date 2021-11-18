import axios from "utils/axios";

export const loginUser = (form) => {
  return { type: "LOGIN", payload: axios.post("/auth/login", form) };
};
