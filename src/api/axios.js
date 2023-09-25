import axios from "axios";

export const API = axios.create({
  baseURL: "http://43.202.131.92:5173",
  headers: {
    "Content-Type": "application/json"
  }
});
