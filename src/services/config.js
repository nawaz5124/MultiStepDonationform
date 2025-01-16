import axios from "axios";

export const BASE_URL = "http://localhost:8000/api";
//export const BASE_URL = "http://192.168.0.77:8000/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Optional: Set a timeout for requests
});

export default axiosInstance;