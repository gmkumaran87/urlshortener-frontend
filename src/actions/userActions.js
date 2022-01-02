import { uiActions } from "../store/ui-slice";
import { sendUserUrl } from "../services/user.service";
import { authActions } from "../store/auth-slice";

const createShortUrl = (url) => {
    return async(dispatch) => {
        try {
            const result = await sendUserUrl(url);

            if (result.status === 201) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: result.data.msg,
                    })
                );
                dispatch(authActions.setLoggedIn());
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

export { createShortUrl };