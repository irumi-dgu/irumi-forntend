import axios from "axios";

export const API = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "http://iirumi.com/",
  //axios.js + config.js
  //http + http localhost 조합 = 보류 (통신 안됨)
  //http + http iirumi.com 조합 = 쓰레기
  //http + https localhost 조합

  //https + http iirumi.com 조합 = 성공 (일단 되긴 됨 서버도 열리고 통신도 됨) 다음날 접속 X
  //https + https iirumi.com 조합 = 보류 (통신 안됨) 재시도
  //https + http localhost 조합 = 실패
  headers: {
    "Content-Type": "application/json"
  }
});
