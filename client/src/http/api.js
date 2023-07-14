import axios from "axios";

const api = axios.create({
  mode: "no-cors",
  baseURL: "https://final-project-be.vercel.app/api"
});

api.interceptors.request.use((config) => {
  const newConfig = config;
  newConfig.headers.authorization =
    JSON.parse(localStorage.getItem("token")) || "null";
  return newConfig;
});

export default api;
