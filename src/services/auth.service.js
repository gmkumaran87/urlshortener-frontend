import axios from "axios";

const API_URL = "";

const register = async(obj) => {
    const result = await axios.post(API_URL, obj);
    return result;
};

const login = async(obj) => {
    const result = await axios.post(API_URL, obj);
    if (result.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.data));
    }
    return result;
};

const logout = () => localStorage.removeItem("user");

export { register, login, logout };