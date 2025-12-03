import axios from "axios";

export const API_BASE = "http://localhost:8000/api";

/* Create an Axios instance with the base URL set to the API endpoint */
const API = axios.create({
  baseURL: API_BASE,
});

export default API;
