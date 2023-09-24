import axios from "axios";

export const API = axios.create({
<<<<<<< HEAD
  baseURL: "http://127.0.0.1:8000",
=======
  baseURL: "http://127.0.0.1:8000/",
>>>>>>> ae8a3183b3f630a5e6c3e79a88d73bb5f22a9fd6
  headers: {
    "Content-Type": "application/json"
  }
});
