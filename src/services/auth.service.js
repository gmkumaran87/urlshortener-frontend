import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/auth";

const register = async(obj) => {
    console.log("Register Service", obj);
    const result = await axios.post(`${API_URL}/register`, obj);

    console.log(result);
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