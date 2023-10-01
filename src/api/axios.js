import axios from "axios";

export const API = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://iirumi.com/",
  //https + http localhost 조합 = 실패
  //http + http localhost 조합 = 보류 (서버는 열리는데 통신이 안됨)
  //http + http iirumi.com 조합 = 쓰레기
  //https + http iirumi.com 조합
  headers: {
    "Content-Type": "application/json"
  }
});
