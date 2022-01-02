import axios from "axios";
import authHeader from "./auth-header";

const API_URL_USER = "http://localhost:5000/api/v1/url";

const getUserUrl = async() =>
    await axios.get(`${API_URL_USER}/`, { headers: authHeader() });

const sendUserUrl = async(url) =>
    await axios.post(`${API_URL_USER}/`, url, { headers: authHeader() });

export { sendUserUrl, getUserUrl };