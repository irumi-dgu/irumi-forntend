import axios from "axios";

export const API = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "http://iirumi.com/",
  //https + http localhost 조합 = 실패
  headers: {
    "Content-Type": "application/json"
  }
});
