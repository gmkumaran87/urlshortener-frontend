import axios from "axios";
import authHeader from "./auth-header";

const API_URL_USER = "http://localhost:5000/api/v1/url";

const userDetail = async(userId) =>
    await axios.get(`${API_URL_USER}/${userId}`, { headers: authHeader() });