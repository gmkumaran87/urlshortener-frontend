import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

import { register, login, logout } from "../services/auth.service";

export const register = (userObj) => {
    return async(dispatch) => {
        try {
            const result = await register(userObj);
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    message: result.data,
                })
            );
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