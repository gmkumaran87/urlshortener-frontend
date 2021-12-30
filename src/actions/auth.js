import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

import { register, login, logout } from "../services/auth.service";

export const registerUser = (userObj) => {
    return async(dispatch) => {
        try {
            const result = await register(userObj);
            console.log(result);

            console.log("After register", result.data.msg);
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