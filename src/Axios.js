// api.js

import axios from "axios";
import { SERVER_URL } from "./server";

const Axios = axios.create({
  baseURL: SERVER_URL + "/api", // Ganti dengan basis URL API Anda
  timeout: 10000, // Waktu tunggu maksimal dalam milidetik
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
