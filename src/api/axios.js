import axios from "axios";

export const API = axios.create({
  baseURL: "http://iirumi.com/",
  headers: {
    "Content-Type": "application/json"
  }
});
