import axios from "axios";

const API = axios.create({
  baseURL: "https://ans-art-backend.onrender.com",
});

export default API;