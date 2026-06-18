import axios from "axios";

const api = axios.create({
  baseURL:
    "https://organic-zebra-pj59jv66r4gqf9wjp-5000.app.github.dev/api",
});

// Automatically attach JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;