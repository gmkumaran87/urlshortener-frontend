import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/auth";

const register = async(obj) => {
    const result = await axios.post(`${API_URL}/register`, obj);

    return result;
};

const login = async(obj) => {
    const result = await axios.post(`${API_URL}/login`, obj);

    if (result.status === 201) {
        localStorage.setItem("user", JSON.stringify(result.data));
    }
    return result;
};

const logout = () => localStorage.removeItem("user");

const forgotPassword = async(email) =>
    await axios.post(`${API_URL}/forgot-password`, email);

const emailLink = async(userId, randomStr) =>
    await axios.post(
        `${API_URL}/validation/${userId}/${randomStr}`, {}, { timeout: 4000 }
    );

const passwordReset = async(obj) =>
    await axios.post(`${API_URL}/update-password`, obj);

const verifyUser = async(confirmCode) =>
    await axios.get(`${API_URL}/confirm/${confirmCode}`);

export {
    register,
    login,
    logout,
    emailLink,
    forgotPassword,
    passwordReset,
    verifyUser,
};