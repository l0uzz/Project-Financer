import axios from "axios";

export const handler = axios.create({
  baseURL: "http://localhost:3030/",
  headers: {
    "Content-Type": "application/json",
  },
});
