import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // 올바른 구문
  headers: {
    "Content-Type": "application/json"
  }
});
