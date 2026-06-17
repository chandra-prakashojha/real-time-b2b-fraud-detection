import axios from "axios";

const api = axios.create({
  baseURL:
    "https://organic-zebra-pj59jv66r4gqf9wjp-5000.app.github.dev/api",
});

export default api;