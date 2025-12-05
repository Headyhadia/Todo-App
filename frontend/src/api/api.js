import axios from "axios";

export const API_BASE = import.meta.env.VITE_API_URL;

/* Create an Axios instance with the base URL set to the API endpoint */
const API = axios.create({
  baseURL: API_BASE,
});

export default API;
