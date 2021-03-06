import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

import {
    forgotPassword,
    register,
    login,
    emailLink,
    passwordReset,
    verifyUser,
} from "../services/auth.service";

const registerUser = (userObj) => {
    return async(dispatch) => {
        try {
            const result = await register(userObj);

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    message: result.data.msg,
                })
            );
        } catch (error) {
            console.log(error.response);
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: error.response.data.msg,
                })
            );
        }
    };
};

const loginUser = (obj) => {
    return async(dispatch) => {
        try {
            const result = await login(obj);

            if (result.status === 201) {
                dispatch(
                    authActions.login({
                        isLoggedIn: true,
                        user: result.data,
                    })
                );
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: result.data.msg,
                    })
                );
            }
        } catch (error) {
            console.log(error.response);
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: error.response.data.msg,
                })
            );
        }
    };
};
const forgotPasswordLink = (email) => {
    return async(dispatch) => {
        try {
            const result = await forgotPassword(email);

            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: result.data.msg,
                    })
                );
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: error.response.data.msg,
                })
            );
        }
    };
};

const emailValidation = (userId, randomStr) => {
    return async(dispatch) => {
        try {
            const result = await emailLink(userId, randomStr);

            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: result.data.msg,
                        isLoading: false,
                    })
                );
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: error.response.data.msg,
                    isLoading: true,
                })
            );
        }
    };
};

const updatePassword = (userObj) => {
    return async(dispatch) => {
        try {
            const result = await passwordReset(userObj);
            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: result.data.msg,
                        isLoading: false,
                    })
                );
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: error.response.data.msg,
                    isLoading: true,
                })
            );
        }
    };
};

const accountActivation = (confirmationCode) => {
    return async(dispatch) => {
        try {
            const result = await verifyUser(confirmationCode);

            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: result.data.msg,
                        isLoading: false,
                    })
                );
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: error.response.data.msg,
                    isLoading: false,
                })
            );
        }
    };
};

export {
    registerUser,
    loginUser,
    forgotPasswordLink,
    emailValidation,
    updatePassword,
    accountActivation,
};