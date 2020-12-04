import axios from "axios";
export const baseURL = "https://sample-url.com/api/v1";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
  },
});

export default axiosInstance;
